import { Component } from '@angular/core';
import { IonLabel, IonGrid, IonRow, IonCol, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon } from '@ionic/angular/standalone';
import { UserIdComponent } from '../components/user-id/user-id.component';
import { ShiftInputComponent } from '../components/shift-input/shift-input.component';
import { NotificationItemComponent } from '../components/notification-item/notification-item.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonGrid, IonRow, IonCol, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, UserIdComponent, ShiftInputComponent, NotificationItemComponent],
})
export class HomePage {
  constructor() { }
}
