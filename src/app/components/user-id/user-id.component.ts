import { Component, OnInit } from '@angular/core';
import {IonGrid, IonRow, IonCol, IonIcon, IonLabel, IonItem, IonList} from '@ionic/angular/standalone'

@Component({
  selector: 'user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonIcon, IonLabel, IonItem, IonList]
})
export class UserIdComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
