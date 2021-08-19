import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuggestedPointOfInterest } from '@services/suggested-points-of-interest.service';

@Component({
  selector: 'app-place-toggle',
  templateUrl: './place-toggle.component.html',
  styleUrls: ['./place-toggle.component.scss'],
})
export class PlaceToggleComponent implements OnInit {
  @Input() poi: SuggestedPointOfInterest;
  @Input() isSelected = false;
  @Output() toggle = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  onToggle() {
    this.toggle.emit(!this.isSelected);
  }
}
