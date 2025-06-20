import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit{
  userList:any[]=[]
  
  constructor(private _UserService:UserService){}
  ngOnInit(): void {
    this.getUsers()
   
  }

  getUsers(){
    this._UserService.getAllUsers().subscribe({
      next:(res:any)=>{
        this.userList=res.users
console.log(res)


      },
      error:(err)=>{
console.log(err)

      }
      ,
      complete:()=>{
console.log("Done")

      }
    })
  }

}
