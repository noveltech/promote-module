import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { IonContent, ModalController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import {
  PoiApiResponse,
  PointsOfInterestService,
} from '@services/points-of-interest.service';
import { TutorialModalComponent } from '../personal-guide-components/tutorial-modal/tutorial-modal.component';
import TutorialInstructions, { TutorialIntro } from './data/tutorial';
import questions, { Question } from './data/questions';
import { LocationPickerModalComponent } from './components/location-picker-modal/location-picker-modal.component';
import { UtilsService } from '@services/utils.service';
import { AlertService } from '@services/alert.service';
import { LoaderService } from '@services/loader.service';
import {
  SuggestedPointOfInterest,
  SuggestedPointsOfInterestService,
} from '@services/suggested-points-of-interest.service';
import { Storage } from '@ionic/storage';
import { ConstantsService } from '@constants/constants.service';
import culturalPlaceIds from './data/cultural-places';
import { Router } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-suggested-points-of-interest',
  templateUrl: './suggested-points-of-interest.page.html',
  styleUrls: ['./suggested-points-of-interest.page.scss'],
})
export class SuggestedPointsOfInterestPage implements OnInit {
  @ViewChild('ionContent', { static: false })
  ionContentEl: IonContent;

  currentStep = 1;
  currentSubStep = 1;
  isLoading = false;

  segment: 'culturalPlaces' | 'foursquare' = 'culturalPlaces';

  popularPlaces: SuggestedPointOfInterest[] = [];
  likedPlaces: Record<string, number> = {};
  suggestedPlaces: SuggestedPointOfInterest[] = [];
  didSelectPlaces = false;

  culturalPlaces: PoiApiResponse[] = [];

  questionsForm: FormGroup;
  questions = questions;

  location: { lat: number; lng: number };

  get questionsFormArray() {
    return this.questionsForm.controls.questions as FormArray;
  }

  constructor(
    private platform: Platform,
    private modalCtrl: ModalController,
    private storage: Storage,
    private constants: ConstantsService,
    private translate: TranslateService,
    private poiService: PointsOfInterestService,
    private suggestedPoisService: SuggestedPointsOfInterestService,
    private utilsService: UtilsService,
    private alertService: AlertService,
    private loaderService: LoaderService,
    private router: Router,
    private utils: UtilsService
  ) {}

  ngOnInit() {
    this.showTutorialModal();
  }

  async showTutorialModal(showOnlyIfNotCompleted?: boolean) {
    showOnlyIfNotCompleted = showOnlyIfNotCompleted ?? true;

    if (showOnlyIfNotCompleted) {
      const tutorialCompleted = await this.storage.get(
        this.constants.STORAGE_SUGGESTED_POIS_TUTORIAL_COMPLETED
      );

      if (!!tutorialCompleted) {
        return;
      }
    }

    const lang = this.translate.currentLang;

    const modal = await this.modalCtrl.create({
      component: TutorialModalComponent,
      cssClass: 'full-screen-modal',
      componentProps: {
        intro: TutorialIntro[lang],
        instructions: TutorialInstructions[lang],
        buttonTitleNext: this.translate.instant(
          'SUGGESTED_PLACES_TUTORIAL_BUTTON_TITLE_NEXT'
        ),
        buttonTitleStart: this.translate.instant(
          'SUGGESTED_PLACES_TUTORIAL_BUTTON_TITLE_START'
        ),
      },
    });

    await modal.present();

    await modal.onDidDismiss();
    await this.storage.set(
      this.constants.STORAGE_SUGGESTED_POIS_TUTORIAL_COMPLETED,
      true
    );
  }

  generateQuestionsForm() {
    this.questionsForm = new FormGroup({
      questions: new FormArray([]),
    });

    this.questions.forEach((q) => {
      this.questionsFormArray.push(new FormControl(false));
    });
  }

  async goToNextStep() {
    // const totalSteps = 3;
    switch (this.currentStep) {
      case 2: {
        switch (this.currentSubStep) {
          case 1: {
            // if (this.selectedPlaces.length < 1) {
            //   break;
            // }
            this.currentSubStep = 2;
            this.ionContentEl.scrollToTop();
            break;
          }
          case 2: {
            this.currentStep = 3;
            this.currentSubStep = 1;
            this.ionContentEl.scrollToTop();
            this.showResults();
            break;
          }
        }
        break;
      }
      case 3: {
        break;
      }
    }
  }

  showQuestionsForm() {
    this.didSelectPlaces = true;
  }

  async showResults() {
    this.isLoading = true;
    const selectedQuestions: Question[] = this.questionsForm.value.questions
      .map((checked, i) => (checked ? this.questions[i] : null))
      .filter((v) => v !== null);

    // if (selectedQuestions.length < 1) {
    //   this.suggestedPlaces = this.selectedPlaces;
    //   return;
    // }

    const categoryIds = new Set<string>(
      selectedQuestions.reduce((acc, q) => [...acc, ...q.categoryIds], [])
    );

    const recommendations = await this.suggestedPoisService
      .getRecommendedPointsOfInterest(
        {
          lat: this.location.lat,
          lng: this.location.lng,
        },
        this.likedPlaces,
        { categories: [...categoryIds], limit: 10 }
      )
      .toPromise();

    for (const recommendation of recommendations) {
      if (!!culturalPlaceIds[recommendation.id]) {
        const pois = await Promise.all(
          culturalPlaceIds[recommendation.id].map((r) =>
            this.poiService.getPointOfInterestById(r).toPromise()
          )
        );

        this.culturalPlaces = [...this.culturalPlaces, ...pois];
      } else {
        this.suggestedPlaces.push(recommendation);
      }
    }

    this.isLoading = false;
  }

  async fetchPopularPlaces(lat: number, lng: number) {
    try {
      this.popularPlaces = await this.suggestedPoisService
        .getPopularPointsOfInterest({ lat, lng })
        .toPromise();

      console.log('available places ', this.popularPlaces);
    } catch (err) {
      this.alertService.presentAlert(
        '',
        this.translate.instant('UNKNOWN_ERROR')
      );
    }
  }

  async onUseDeviceLocation() {
    await this.loaderService.presentLoading({
      message: this.translate.instant('PLEASE_WAIT'),
      backdropDismiss: false,
    });
    const location = await this.utilsService.getCurrentPosition().toPromise();
    this.loaderService.dismissLoading();

    if (!location) {
      this.alertService.presentToast(
        this.translate.instant(
          'RECOMMENDED_PLACES_FAILED_TO_DETERMINE_LOCATION'
        )
      );
      this.onChooseLocationFromMap();
      return;
    }

    console.log('got location ', location);

    this.isLoading = true;
    await this.fetchPopularPlaces(
      location.coords.latitude,
      location.coords.longitude
    );
    this.generateQuestionsForm();
    this.location = {
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    };
    this.currentStep = 2;
    this.isLoading = false;
  }

  async onChooseLocationFromMap() {
    const isIos = this.platform.is('ios');

    const modal = await this.modalCtrl.create({
      component: LocationPickerModalComponent,
      backdropDismiss: true,
      cssClass: 'full-screen-modal',
    });

    if (isIos) {
      await StatusBar.setStyle({ style: Style.Dark });
    }

    await modal.present();

    const res = await modal.onDidDismiss();
    if (isIos) {
      await StatusBar.setStyle({ style: Style.Default });
    }

    if (res.role !== 'confirm') {
      return;
    }
    const coordinates = res.data.coordinates;

    this.isLoading = true;
    await this.fetchPopularPlaces(coordinates.lat, coordinates.lng);
    this.generateQuestionsForm();
    this.location = { lat: coordinates.lat, lng: coordinates.lng };
    this.currentStep = 2;
    this.isLoading = false;
  }

  onRatePlace(id: string, rating: number) {
    this.likedPlaces[id] = rating;
  }

  onViewPoi(poi: PoiApiResponse) {
    this.router.navigate(['/', 'point-of-interest', poi.id], {
      state: { pointOfInterest: poi },
    });
  }

  onViewFoursquarePoi(id: string) {
    this.utilsService.openLink(`https://foursquare.com/v/${id}`);
  }

  getCategoriesOfPoi(poi: SuggestedPointOfInterest) {
    if (!poi || !poi.categories) {
      return '';
    }

    return poi.categories.map((c) => c.name).join(', ');
  }

  openLink(url: string) {
    this.utils.openLink(url);
  }
}
