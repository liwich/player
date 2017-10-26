import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Song} from '../../models/song.interface';
import {SongsProvider} from '../../providers/songs/songs';

/**
 * Generated class for the SongsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-songs-list',
  templateUrl: 'songs-list.html',
})
export class SongsListPage {

  songs: Song[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private songsService: SongsProvider) {
  }

  ionViewDidLoad() {
    this.getSongs();
  }

  getSongs(evt?){
    return this.songsService.getRecommendations()
    .subscribe(
      (data)=>{
        console.log(data);
        this.songs=data;
        if(evt){
          evt.complete();
        }
      }
    )
  }

  goToPlaySong(song){
    this.navCtrl.push('PlaySongPage', {
      song:song
    });
  }

  events(evt){
    this.getSongs(evt);
  }

}
