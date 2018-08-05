import { Component, OnInit } from '@angular/core';
import { FavoriteServiceService } from '../favorite-service.service';
import { User } from '../user';
import { ListService} from '../list.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  public favList: User[] = []
  public list: User[] = []

  constructor(public favoriteService: FavoriteServiceService,
              public listService: ListService
            ) { }

  // ngOnInit() {
  //   console.log(this.favoriteService.favList)
  //   this.favList = this.favoriteService.list
  //   this.favoriteService.getFavList().subscribe(data => {
  //     this.favList = data
  //   })
  // }

  ngOnInit() {
    this.favList = this.listService.favList;
    this.list = this.listService.users;
  }

  // onRemove(fav, i): void{
  //   console.log(fav, i);
  //   this.favList.splice(i,1);
  // }

  onUnlike(i) : void{
    this.listService.toggleUserLiked(i);
  }

  onDetail(i: number): void{
    this.listService.setIndex(i);
  }

}
