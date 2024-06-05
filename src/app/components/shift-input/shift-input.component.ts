import { Component, OnInit } from '@angular/core';
import { IonSelect, IonSelectOption } from '@ionic/angular/standalone'

@Component({
  selector: 'shift-input',
  templateUrl: './shift-input.component.html',
  styleUrls: ['./shift-input.component.scss'],
  standalone: true,
  imports: [IonSelect, IonSelectOption ]
})
export class ShiftInputComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
