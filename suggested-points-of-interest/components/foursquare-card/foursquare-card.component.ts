import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuggestedPointOfInterest } from '@services/suggested-points-of-interest.service';

@Component({
  selector: 'app-foursquare-card',
  templateUrl: './foursquare-card.component.html',
  styleUrls: ['./foursquare-card.component.scss'],
})
export class FoursquareCardComponent implements OnInit {
  @Input() poi: SuggestedPointOfInterest;
  @Output() viewPointOfInterestDetails = new EventEmitter();

  get categoryNames() {
    if (!this.poi || !this.poi.categories) {
      return '';
    }

    return this.poi.categories.map((c) => c.name).join(', ');
  }

  constructor() {}

  ngOnInit() {}

  onViewPointDetails() {
    this.viewPointOfInterestDetails.emit();
  }
}
