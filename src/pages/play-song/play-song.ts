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
  public progressInterval: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.song = navParams.get('song');
  }

  ionViewDidLoad() {

  }

  ionViewDidLeave(){
    this.pauseTrack();
  }

  playSong(){
       this.progressInterval = setInterval(() => {

           this.song.progress < 100 ? this.song.progress++ : this.song.progress = 0;
           console.log(this.song.progress);

       }, 1000);
  }

  pauseTrack(){

        clearInterval(this.progressInterval);

    }


}
