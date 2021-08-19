import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

export interface Instruction {
  header: string;
  paragraph: string;
  image: string;
}

@Component({
  selector: 'app-tutorial-modal',
  templateUrl: './tutorial-modal.component.html',
  styleUrls: ['./tutorial-modal.component.scss'],
})
export class TutorialModalComponent implements OnInit {
  @Input() instructions: Instruction[] = [];
  @Input() intro: Instruction;
  @Input() buttonTitleNext: string;
  @Input() buttonTitleStart: string;

  totalSteps = 0;
  currentStep = 0;
  currentInstruction: Instruction = {
    header: '',
    paragraph: '',
    image: '',
  };

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.totalSteps = this.instructions.length;

    if (this.totalSteps < 1) {
      this.modalCtrl.dismiss('success');
      return;
    }

    this.currentInstruction = this.intro ?? this.instructions[0];
    this.currentStep = !!this.intro ? 0 : 1;
    this.changeDetectorRef.detectChanges();
  }

  onNext() {
    const nextStep = this.currentStep + 1;

    if (nextStep > this.totalSteps) {
      this.modalCtrl.dismiss('success');
    } else {
      this.currentStep = nextStep;
      this.currentInstruction = this.instructions[nextStep - 1];
    }

    this.changeDetectorRef.detectChanges();
  }
}
