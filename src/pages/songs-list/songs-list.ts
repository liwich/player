import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Song} from '../../models/song.interface';

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

  songs: Song[]= 
  [
    {
    title:	"If I Ain't Got You",
    artist:	"Alicia Keys",
    preview_url:	"https://p.scdn.co/mp3-preview/643b0c241b1c0f65d60fe7e336bc2c86c76f8418",
    image_small:	"https://i.scdn.co/image/5430a1c20f29188a9515923a2cae38728b2b1162",
    image_medium:	"https://i.scdn.co/image/2f33a7a92b5c42cec1acf414c13109fe0996e1e4",
    image_large:	"https://i.scdn.co/image/41946892ffbe0d552beda876a3068329e26f8b17",
    open_url:	"https://open.spotify.com/track/4Z3bfpzu1Bvk82LPAFXvkp",
    song_id:	"54dd0bc8a57fa90c007704ff"
  },
  {
    title:	"Time Marches On",
    artist:	"Tracy Lawrence",
    preview_url:	"https://p.scdn.co/mp3-preview/8cf26941ea45658bcc633134121e539824009031",
    image_small:	"https://i.scdn.co/image/22bed48ab513373ffcc7340ef6b99f769628487d",
    image_medium:	"https://i.scdn.co/image/13fe0d65adee9941656716a7c1e88fff88db341a",
    image_large:	"https://i.scdn.co/image/a644238640c0a43f42ed1f19615b87160da4ed45",
    open_url:	"https://open.spotify",
    song_id:	"54dd0bc8a57fa90c007704e9"
  },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SongsListPage');
  }

}
