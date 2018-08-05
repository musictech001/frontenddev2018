import { Component, OnInit, Input } from '@angular/core';
import { WebServiceService } from "../web-service.service";
import { User } from "../user";
// import { FavoriteServiceService } from '../favorite-service.service';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  @Input() public users: User[];

  constructor(private webService: WebServiceService, 
    ) {
   }

  ngOnInit() {
    // this.loadUsers(5);
  }

  // loadUsers(n:number): void{
  //   this.webService.getUsers(n).subscribe(data => {
  //     if (data.results) {        
  //       // console.log(data.results);
  //       data.results.forEach(result => {
  //         let newUser = new User();
  //         newUser.firstname = result.name.first;
  //         newUser.age = result.dob.age; 
  //         newUser.avatar = result.picture.medium;
  //         newUser.location = result.location.street + ', ' + result.location.city + ', ' +result.location.state;
  //         this.users.push(newUser);
  //       });
  //       console.log(this.users);
  //     }
  //   });
  // } 

  // onMore(): void {
  //   this.loadUsers(5);
  // }

  onClickFav(user: User) : void{
    // this.favoriteService.addFav(user)
    
  }

}
