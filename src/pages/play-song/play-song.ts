import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Song } from '../../models/song.interface';


@IonicPage()
@Component({
  selector: 'page-play-song',
  templateUrl: 'play-song.html',
})
export class PlaySongPage {

  public song: Song;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.song = navParams.get('song');
  }

  ionViewDidLoad() {

  }

}
