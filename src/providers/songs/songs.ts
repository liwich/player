import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Song} from '../../models/song.interface';

@Injectable()
export class SongsProvider {

  data:Song[];

  constructor(public http: Http) {
    console.log('Hello SongsProvider Provider');
  }

  getRecommendations(){
    return this.http.get("https://ionic-songhop.herokuapp.com/recommendations")
    .map( res=> res.json() )
    .catch(err => Observable.throw("XHR error on getRecommendations " +err));
  }

}
