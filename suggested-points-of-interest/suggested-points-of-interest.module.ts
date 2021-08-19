import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuggestedPointsOfInterestPageRoutingModule } from './suggested-points-of-interest-routing.module';

import { SuggestedPointsOfInterestPage } from './suggested-points-of-interest.page';
import { PersonalGuideComponentsModule } from '../personal-guide-components/personal-guide-components.module';
import { SuggestedPointsOfInterestComponentsModule } from './components/suggested-points-of-interest-components/suggested-points-of-interest-components.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedComponentsModule } from '@shared/shared-components.module';
import { BarRatingModule } from 'ngx-bar-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PersonalGuideComponentsModule,
    SharedComponentsModule,
    TranslateModule.forChild(),
    BarRatingModule,
    SuggestedPointsOfInterestComponentsModule,
    SuggestedPointsOfInterestPageRoutingModule,
  ],
  declarations: [SuggestedPointsOfInterestPage],
})
export class SuggestedPointsOfInterestPageModule {}
