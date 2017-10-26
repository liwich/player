import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaySongPage } from './play-song';
import { ProgressBarComponentModule } from '../../components/progress-bar/progress-bar.module';


@NgModule({
  declarations: [
    PlaySongPage,
  ],
  imports: [
    ProgressBarComponentModule,
    IonicPageModule.forChild(PlaySongPage),
  ],
})
export class PlaySongPageModule {}
