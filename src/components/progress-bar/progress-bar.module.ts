import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [ProgressBarComponent],
	imports: [ IonicModule ],
	exports: [ProgressBarComponent]
})
export class ProgressBarComponentModule {}
