import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceToggleComponent } from '../place-toggle/place-toggle.component';
import { FoursquareCardComponent } from '../foursquare-card/foursquare-card.component';
import { LocationPickerModalComponent } from '../location-picker-modal/location-picker-modal.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    PlaceToggleComponent,
    FoursquareCardComponent,
    LocationPickerModalComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    TranslateModule.forChild(),
    LeafletModule,
  ],
  exports: [
    PlaceToggleComponent,
    FoursquareCardComponent,
    LocationPickerModalComponent,
  ],
})
export class SuggestedPointsOfInterestComponentsModule {}
