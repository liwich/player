import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Song } from '../../models/song.interface';

declare let Media: any;

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
  public duration: any;
  public completed: any;

  public audio: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.song = navParams.get('song');
    if (window['cordova'] === undefined || window['Media'] === undefined) {
      console.log('Cordova Media is not available');
      return;
    };
    this.createAudio(this.song.preview_url);
  }

  ionViewDidLoad() {

  }

  ionViewDidLeave(){
    this.destroy();
  }

  private createAudio(url) {
    this.audio = new Media(url, () => {
       console.log('Finished playback');
       this.stopTimer();
       this.isPlaying = false;
       this.destroy(); 
    }, (err) => {
      console.log(`Audio error => track ${url}`, err);
    }, (status) => {

    });
  }


  public playSong() {
    if (!this.audio) {
      this.createAudio(this.song.preview_url);
    }

    this.isPlaying = true;
    this.audio.play();
    this.startTimer();
  }

  private startTimer() {
    this.progressInterval = setInterval(() => {
      if (this.duration === undefined) {
        let duration: number = this.audio.getDuration();
        (duration > 0) && (this.duration = Math.round(this.audio.getDuration() * 100 )/100);
      }

      this.audio.getCurrentPosition((position) => {
            if (position > -1) {
              this.progress = Math.round(position * 100 * 3.36)/100;
              console.log(this.progress);
              this.completed = this.duration > 0 ? Math.round(this.progress / this.duration * 100)/100 : 0;
            }
        }, (e) => {
            console.log("Error getting position", e);
        }
      );
    }, 1000);
  }

  private stopTimer() {
    clearInterval(this.progressInterval);
  }

  public pauseSong() {
    if (!this.isPlaying) return;

    this.isPlaying = false;
    this.audio.pause();
    this.stopTimer();
  }

  public destroy() {
    if(!this.audio) return;
    this.audio.release();
  }

}
