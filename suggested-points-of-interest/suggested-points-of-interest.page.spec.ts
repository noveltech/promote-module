import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuggestedPointsOfInterestPage } from './suggested-points-of-interest.page';

describe('SuggestedPointsOfInterestPage', () => {
  let component: SuggestedPointsOfInterestPage;
  let fixture: ComponentFixture<SuggestedPointsOfInterestPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedPointsOfInterestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuggestedPointsOfInterestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
