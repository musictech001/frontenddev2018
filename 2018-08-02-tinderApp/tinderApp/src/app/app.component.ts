import { Component, Input, Output } from "@angular/core";
import { WebServiceService } from "./web-service.service";
import { User } from "./user";
import { ListService} from './list.service';

// import { DetailViewComponent} from './detail-view/detail-view.component';
// import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  constructor(private webService: WebServiceService,
              private listService: ListService) {                
              }
  title = "iTinder";
  public user: User;
  public users: User[] = [];
  public hideDetail: Boolean = false;
  public showListView: Boolean = true;
  // public userId: number = 2; // index of the current user

  ngOnInit() {
   this.loadUsers(5);
  }

  loadUsers(n:number): void{
    // load users data from list service
    this.listService.loadUsers(n).subscribe(users=>this.users=users);
  } 

  loadFavorite(): void {
    this.hideDetail = true;
    this.showListView = false;
  }

  loadDetail(): void {
    console.log("loadDetail()");
    this.hideDetail = false;
    this.showListView = false;
  }

  loadList(): void{
    console.log("load list!");
    this.hideDetail = true;
    this.showListView = true;
  }


  onMore(): void {
    this.loadUsers(5);
  }

  onRemove(i: number): void{
    console.log("remove users, i=",i);
    // this.users.splice(i, 1);
    this.listService.removeUser(i);
    // this.updateUsers();
  }

  onClickFav(user: User, index: number) : void{
    this.listService.toggleUserLiked(index);
    let favList = this.listService.getUsers();
    // set current user in list service
    this.listService.setIndex(index);
    console.log(favList);
  }

  onDetail(i: number): void{
    // this.userId = i;
    this.listService.setIndex(i);
    // console.log("onDetail(), userId= ", i);
    this.loadDetail();
  }

}
