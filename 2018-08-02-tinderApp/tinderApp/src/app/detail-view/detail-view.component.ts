import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { FavoriteServiceService } from '../favorite-service.service';
import { ListService} from '../list.service';

// parameterized url
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  
  @Input('user') user:User;
  
  @Output() public goNext: EventEmitter<any> = new EventEmitter()

  constructor(public favoriteService: FavoriteServiceService,
              private listService: ListService,
              private route: ActivatedRoute,
              private location: Location
              ) {
                this.user = this.listService.getUser();
                console.log("detail-view.constructor()");                
              }

  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.listService.setIndex(id);
    this.getUser();
    // console.log("detail-view.ngOnInit(), id=", id);
  }

  onClickNext(): void{
    console.log("detail-view.onClickNext()")
    this.user = this.listService.getNextUser();
    // this.goNext.emit()
  }

  onClickFav() : void{
    // this.favoriteService.addFav(this.user);
    this.listService.toggleCurrentUserLiked();
  }

  public getUser() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.user = this.listService.getUser();
    console.log("detail-view.getUser(): id=", id);
  }

}
