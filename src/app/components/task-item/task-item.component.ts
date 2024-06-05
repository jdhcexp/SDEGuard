import { Component, OnInit } from '@angular/core';
import {IonItem, IonIcon, IonLabel} from '@ionic/angular/standalone'

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  standalone: true,
  imports:[IonItem, IonIcon, IonLabel]
})
export class TaskItemComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
