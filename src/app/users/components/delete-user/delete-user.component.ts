import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

    userId: number=0;
   userData: any;

  constructor(  private _route: ActivatedRoute,
    private _userService: UserService,
    private _router: Router,
    private toastr: ToastrService){
    this.userId = this._route.snapshot.params['id'];

  }
  ngOnInit(): void {
   if (this.userId){
    this.getUser(this.userId)
   }
  }
  
  getUser(id:any){
  this._userService.getUserByID(id).subscribe({
      next: (res) => {
        this.userData = res;
      },
      error: (err) => {
        this.toastr.error('Failed to fetch user details');
        this._router.navigate(['/users/list']);
      }
    });
  }

  confirmDelete() {
    this._userService.deleteUser(this.userId).subscribe({
      next: () => {
        this.toastr.success('User deleted successfully');
        this._router.navigate(['/users/list']);
      },
      error: () => {
        this.toastr.error('Failed to delete user');
        this._router.navigate(['/users/list']);
      }
    });
  }

  cancelDelete() {
    this._router.navigate(['/users/list']);
  }
}
