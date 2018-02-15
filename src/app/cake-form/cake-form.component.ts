import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VoteServiceService } from '../vote-service.service';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cake-form',
  templateUrl: './cake-form.component.html',
  styleUrls: ['./cake-form.component.css']
})
export class CakeFormComponent implements OnInit {

  form: FormGroup = this._fb.group( {
    name: [ null ],
    doesLike: [ null ]
  } );

  constructor(
    private _fb: FormBuilder,
    private _voteService: VoteServiceService
  ) { }

  ngOnInit() {
    this.form.valueChanges
      .map( model => ( { ... model, name: model.name.toUpperCase( )  } ) )
      .filter( model => ! model.name.match( /^M/ ) )
      .subscribe( console.log.bind( console ) )
  }

  clear( ) {
    this.form.reset( )
  }

  vote( ) {
    const { name, doesLike } = this.form.getRawValue( )

    this._voteService
      .vote( name, doesLike )
      .subscribe( );
  }

}
