import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VoteServiceService } from '../vote-service.service';

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
    this.form.setValue( {
      name: 'gabi',
      doesLike: true
    } )
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
