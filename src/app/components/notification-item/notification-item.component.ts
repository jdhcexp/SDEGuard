import { Component, OnInit } from '@angular/core';
import {IonItem, IonIcon, IonLabel} from '@ionic/angular/standalone'

@Component({
  selector: 'notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
  standalone: true,
  imports:[IonItem, IonIcon, IonLabel]
})
export class NotificationItemComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
