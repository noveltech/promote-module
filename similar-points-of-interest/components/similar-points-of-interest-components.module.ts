import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructionsComponent } from './instructions/instructions.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InstructionsComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [InstructionsComponent],
})
export class SimilarPointsOfInterestComponentsModule {}
