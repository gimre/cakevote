import { Component, OnInit } from '@angular/core';
import { VoteServiceService } from '../vote-service.service';

@Component({
  selector: 'app-cake-form',
  templateUrl: './cake-form.component.html',
  styleUrls: ['./cake-form.component.css']
})
export class CakeFormComponent implements OnInit {

  name: string = '';
  doesLike: boolean = false;

  constructor(
    private _voteService: VoteServiceService
  ) { }

  ngOnInit() {
  }

  clear( ) {
    this.name = '';
    this.doesLike = false;
  }

  vote( ) {
    this._voteService
      .vote( this.name, this.doesLike )
      .subscribe( );
  }

}
