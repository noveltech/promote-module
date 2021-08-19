import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalGuidePageRoutingModule } from './personal-guide-routing.module';

import { PersonalGuidePage } from './personal-guide.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    PersonalGuidePageRoutingModule,
  ],
  declarations: [PersonalGuidePage],
})
export class PersonalGuidePageModule {}
