import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SimilarPointsOfInterestPage } from './similar-points-of-interest.page';

describe('SimilarPointsOfInterestPage', () => {
  let component: SimilarPointsOfInterestPage;
  let fixture: ComponentFixture<SimilarPointsOfInterestPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarPointsOfInterestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SimilarPointsOfInterestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
