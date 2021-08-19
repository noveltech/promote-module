import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalGuidePage } from './personal-guide.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalGuidePage
  },
  {
    path: 'suggested-points-of-interest',
    loadChildren: () => import('./suggested-points-of-interest/suggested-points-of-interest.module').then( m => m.SuggestedPointsOfInterestPageModule)
  },
  {
    path: 'similar-points-of-interest',
    loadChildren: () => import('./similar-points-of-interest/similar-points-of-interest.module').then( m => m.SimilarPointsOfInterestPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalGuidePageRoutingModule {}
