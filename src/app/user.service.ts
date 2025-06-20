import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private _HttpClient:HttpClient) { }

  onLogin(data:any):Observable<any>{

return this._HttpClient.post(`https://dummyjson.com/auth/login`,data)

  }
  getAllUsers():Observable<any>{
    return this._HttpClient.get('https://dummyjson.com/users')
  }
addNewUser(data:any):Observable<any>{
  return this._HttpClient.post(`https://dummyjson.com/users/add`,data)

}
updateUser(data:any,id:number):Observable<any>{
  return this._HttpClient.put(`https://dummyjson.com/users/${id}`,data)

}
getUserByID(id:number):Observable<any>{
  return this._HttpClient.get(`https://dummyjson.com/users/${id}`)

}

deleteUser(id: number): Observable<any> {
  return this._HttpClient.delete(`https://dummyjson.com/users/${id}`);
}

}
