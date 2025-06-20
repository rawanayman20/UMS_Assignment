import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userid:number=0
  userdata:any
   addForm=new FormGroup({
        firstName:new FormControl(null),
        lastName:new FormControl(null),
        birthDate:new FormControl(null),
        email:new FormControl(null),
        age:new FormControl(null),
        phone:new FormControl(null),
      
  
    })
   constructor(private router:Router,private _userService:UserService,private _ActivedRoute:ActivatedRoute){
this.userid=_ActivedRoute.snapshot.params['id']
console.log(this.userid)
   }
  ngOnInit(): void {
   if(this.userid){
      this.getUserData(this.userid)
    }
  }
  getUserData(id:number){
  this._userService.getUserByID(id).subscribe({
    next:(res)=>{
      this.userdata=res
console.log(res)
    },
    error:(err)=>{
console.log(err)
    }, 
    complete:()=>{
      this.addForm.patchValue({
        firstName:this.userdata.firstName,
        lastName:this.userdata.lastName,
        birthDate:this.userdata.birthDate,
        email:this.userdata.email,
        age:this.userdata.age,
        phone:this.userdata.phone
      })
    }
  })
}
 goBack() {
    this.router.navigate(['/users/list']);
  } 
}
