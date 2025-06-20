import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
  userid:number=0
  userdata:any
  constructor(private router:Router,private _userService:UserService,private _ActivedRoute:ActivatedRoute){

this.userid=_ActivedRoute.snapshot.params['id']
console.log(this.userid)
  }
  ngOnInit(): void {
    if(this.userid){
      this.getUserData(this.userid)
    }
  }
  addForm=new FormGroup({
      firstName:new FormControl(null),
      lastName:new FormControl(null),
      birthDate:new FormControl(null),
      email:new FormControl(null),
      age:new FormControl(null),
      phone:new FormControl(null),
    

  })
onCancel() {
  this.router.navigate(['/users/list']);
}
onSubmitUser(data: FormGroup) {
  if (this.userid) {
    // EDIT MODE
    this._userService.updateUser(data.value, this.userid).subscribe({
      next: (res) => {
        console.log('User updated:', res);
        this.router.navigate(['/users/list']);
      },
      error: (err) => {
        console.error('Update failed:', err);
      }
    });
  } else {
    // ADD MODE
    this._userService.addNewUser(data.value).subscribe({
      next: (res) => {
        console.log('User added:', res);
        this.router.navigate(['/users/list']);
      },
      error: (err) => {
        console.error('Add failed:', err);
      }
    });
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
}
