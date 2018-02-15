import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VoteServiceService {

  constructor(
    private _http: HttpClient
  ) { }

  vote( name: string, vote: boolean ) {
    return this._http.post( 'http://7453b9ad.ngrok.io/cakevote', { name, vote } )
  }
}
