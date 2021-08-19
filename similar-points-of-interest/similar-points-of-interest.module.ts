import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimilarPointsOfInterestPageRoutingModule } from './similar-points-of-interest-routing.module';

import { SimilarPointsOfInterestPage } from './similar-points-of-interest.page';
import { PersonalGuideComponentsModule } from '../personal-guide-components/personal-guide-components.module';
import { SimilarPointsOfInterestComponentsModule } from './components/similar-points-of-interest-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalGuideComponentsModule,
    SimilarPointsOfInterestComponentsModule,
    SimilarPointsOfInterestPageRoutingModule,
  ],
  declarations: [SimilarPointsOfInterestPage],
})
export class SimilarPointsOfInterestPageModule {}
