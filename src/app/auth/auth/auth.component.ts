import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
loginForm= new FormGroup({
  username:new FormControl(null,[Validators.required]),
password:new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(16)])
})
  constructor(private _UserService:UserService,private toastr: ToastrService,private router:Router) {
        

   }

  ngOnInit() {
  }


onLogin (data:FormGroup){
  this._UserService.onLogin(data.value).subscribe({
    next:(res)=>{
      console.log(res)
      localStorage.setItem('accessToken',res.accessToken)
      localStorage.setItem('username',res.username)
      localStorage.setItem('image',res.image)
    },
    
    error:(err)=>{
      console.log(err)
this.toastr.error(err.error.message, 'Sorry!');
    },
    
    complete:()=>{
this.toastr.success('You are loggedin successfully!', 'Success!');
this.router.navigate(['/users'])
    }
  })
}
}
