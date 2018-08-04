import { Component, Input, Output } from "@angular/core";
import { WebServiceService } from "./web-service.service";
import { User } from "./user";
import { FavoriteServiceService } from './favorite-service.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  constructor(private webService: WebServiceService,
              public favoriteService: FavoriteServiceService) {                
              }
  title = "iTinder";
  public user: User;
  public users: User[] = [];
  public hideDetail: Boolean = false;
  public showListView: Boolean = false;
  // public index: number;

  ngOnInit() {
   this.loadUser();
   this.loadUsers(5);
  }

  loadUser(): void{
    this.webService.getUser().subscribe(data => {
      if (data.results) {
        const result = data.results[0];
        const newUser = new User();
        newUser.firstname = result.name.first;
        (newUser.age = result.dob.age), (newUser.avatar = result.picture.medium);
        newUser.location = result.location.street + ', ' + result.location.city + ', ' +result.location.state
        this.user = newUser;
      }
    });
  }

  loadUsers(n:number): void{
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
  } 


  next(): void {
    this.loadUser()
  }

  loadFavorite(): void {
    this.hideDetail = true;
    this.showListView = false;
  }

  loadFind(): void {
    this.hideDetail = false;
    this.showListView = false;
  }

  loadListView(): void{
    console.log("load list!");
    this.showListView = true;
  }
  onMore(): void {
    this.loadUsers(5);
  }

  onRemove(i: number): void{
    console.log("remove users, i=",i);
    this.users.splice(i, 1);
  }

  onClickFav(user: User, index: number) : void{
    this.favoriteService.addFav(user);
    this.onRemove(index);   
  }


}
