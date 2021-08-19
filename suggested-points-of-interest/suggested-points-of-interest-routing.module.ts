import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuggestedPointsOfInterestPage } from './suggested-points-of-interest.page';

const routes: Routes = [
  {
    path: '',
    component: SuggestedPointsOfInterestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuggestedPointsOfInterestPageRoutingModule {}
