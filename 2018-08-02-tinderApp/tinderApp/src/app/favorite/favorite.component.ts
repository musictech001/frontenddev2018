import { Component, OnInit } from '@angular/core';
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

  constructor(public listService: ListService) { }

  ngOnInit() {
    this.favList = this.listService.favList;
    this.list = this.listService.users;
  }

  onUnlike(i) : void{
    this.listService.toggleUserLiked(i);
  }

  onDetail(i: number): void{
    this.listService.setIndex(i);
  }

}
