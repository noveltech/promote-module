import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss'],
})
export class InstructionsComponent implements OnInit {
  @Input() header: string = '';
  @Input() paragraph: string = '';
  @Input() buttonText: string = '';

  constructor() {}

  ngOnInit() {}
}
