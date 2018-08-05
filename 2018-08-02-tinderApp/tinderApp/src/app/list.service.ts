// get users from web-service, and provide users to other components

import { User } from "./user";
import { Injectable } from '@angular/core';
import { WebServiceService } from "./web-service.service";
import { Observable, of, ReplaySubject, Subject } from "../../node_modules/rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListService {
  public user: User;
  public index: number = 0; // index of the current user

  public users: User[] = [];
  
  public favList: User[] = [];
  
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
          newUser.liked = false;
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

  getUser() {
    // Todo: add boundary checking.
    return this.users[this.index];
  }

  getNextUser() {
    this.index ++;
    if (this.index >= this.users.length) this.index = 0;
    console.log("list service: index = ", this.index);
    return this.users[this.index];
  }

  removeUser(i: number) {
    console.log("list service: remove ", i);
    this.users.splice(i, 1);
    this.updateFavList();
  }

  setIndex(i: number){
    this.index = (i >= this.users.length || i < 0) ? 0: i;
  }

  getIndex(): number{
    return this.index;
  }

  toggleUserLiked(i: number) {
    this.users[i].liked = !this.users[i].liked;
    this.updateFavList();
  }

  toggleCurrentUserLiked() {
    this.toggleUserLiked(this.index);
  }

  updateFavList(){
    // update favList
    this.favList.splice(0);
    this.users.forEach(user => {
      if(user.liked) this.favList.push(user);
    });
    console.log("update favlist", this.favList);
  }

  getFavList(): User[] {
    return this.favList;
  }

  // getFavList():  Observable<User[]> {
  //   this.list.splice(0);
  //   this.users.forEach(user => {
  //     if(user.liked) this.list.push(user);
  //   });
  //   this.favList.next(this.list)
  //   return this.favList
  // }



}
