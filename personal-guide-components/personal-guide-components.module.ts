import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { StepperComponent } from './stepper/stepper.component';
import { TutorialModalComponent } from './tutorial-modal/tutorial-modal.component';

@NgModule({
  declarations: [StepperComponent, TutorialModalComponent],
  imports: [CommonModule, IonicModule, FormsModule, TranslateModule.forChild()],
  exports: [StepperComponent, TutorialModalComponent],
})
export class PersonalGuideComponentsModule {}
