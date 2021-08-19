import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  @Input() numberOfSteps: number = 0;
  @Input() currentStep: number = 1;

  constructor() {}

  ngOnInit() {}
}
