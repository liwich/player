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
  public progress: number = 0;
  public isPlaying: boolean = false;
  public progressInterval: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.song = navParams.get('song');
  }

  ionViewDidLoad() {

  }

  ionViewDidLeave(){
    this.pauseSong();
  }

  playSong(){
    this.isPlaying = true;
    this.progressInterval = setInterval(() => {
      this.progress < 100 ? this.progress++ : this.progress = 0;
    }, 1000);
  }

  pauseSong(){
    this.isPlaying = false;
    clearInterval(this.progressInterval);
  }


}
