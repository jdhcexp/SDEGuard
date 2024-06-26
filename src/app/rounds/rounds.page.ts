import { Component, OnInit } from '@angular/core';
import { IonContent, IonGrid, IonRow, IonCol, IonButton } from '@ionic/angular/standalone';
import { UserIdComponent } from '../components/user-id/user-id.component';
import { ShiftInputComponent } from '../components/shift-input/shift-input.component';


@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.page.html',
  styleUrls: ['./rounds.page.scss'],
  standalone: true,
  imports: [IonContent, IonGrid, IonRow, IonCol, IonButton, UserIdComponent, ShiftInputComponent]
})
export class RoundsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
