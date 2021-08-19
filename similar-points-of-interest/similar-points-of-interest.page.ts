import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '@constants/constants.service';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { TutorialModalComponent } from '../personal-guide-components/tutorial-modal/tutorial-modal.component';
import TutorialInstructions from './data/tutorial';

@Component({
  selector: 'app-similar-points-of-interest',
  templateUrl: './similar-points-of-interest.page.html',
  styleUrls: ['./similar-points-of-interest.page.scss'],
})
export class SimilarPointsOfInterestPage implements OnInit {
  currentStep = 1;

  constructor(
    private modalCtrl: ModalController,
    private storage: Storage,
    private constants: ConstantsService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.showTutorialModal();
  }

  async showTutorialModal(showOnlyIfNotCompleted?: boolean) {
    showOnlyIfNotCompleted = showOnlyIfNotCompleted ?? true;

    if (showOnlyIfNotCompleted) {
      const tutorialCompleted = await this.storage.get(
        this.constants.STORAGE_SIMILAR_POIS_TUTORIAL_COMPLETED
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
      this.constants.STORAGE_SIMILAR_POIS_TUTORIAL_COMPLETED,
      true
    );
  }
}
