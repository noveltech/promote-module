import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimilarPointsOfInterestPage } from './similar-points-of-interest.page';

const routes: Routes = [
  {
    path: '',
    component: SimilarPointsOfInterestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimilarPointsOfInterestPageRoutingModule {}
