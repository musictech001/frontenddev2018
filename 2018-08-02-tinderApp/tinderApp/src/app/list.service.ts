// get users from web-service, and provide users to other components

import { User } from "./user";
import { Injectable } from '@angular/core';
import { WebServiceService } from "./web-service.service";
import { Observable, of } from "../../node_modules/rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListService {
  public user: User;
  public users: User[] = [];
  public index: number = 0; // index of the current user
  
  constructor(private webService: WebServiceService) {}

  // load users from server
  loadUsers(n:number): Observable<User[]>{
    console.log("list service: loadUsers, n=", n);
    this.webService.getUsers(n).subscribe(data => {
      if (data.results) {        
        // console.log(data.results);
        data.results.forEach(result => {
          let newUser = new User();
          newUser.firstname = result.name.first;
          newUser.age = result.dob.age; 
          newUser.avatar = result.picture.medium;
          newUser.location = result.location.street + ', ' + result.location.city + ', ' +result.location.state;
          this.users.push(newUser);
        });
        console.log(this.users);
      }
    });
    return of(this.users);
  }

  getUsers(): any{
    return this.users;
  }

  getUser(i:number) {
    // Todo: add boundary checking.
    return this.users[i];
  }

  removeUser(i: number) {
    console.log("list service: remove ", i);
    this.users.splice(i, 1);
  }

}