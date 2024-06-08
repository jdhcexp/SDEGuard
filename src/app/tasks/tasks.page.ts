import { Component, OnInit } from '@angular/core';
import { IonContent, IonGrid, IonRow, IonCol, IonLabel, IonItem, IonIcon } from '@ionic/angular/standalone';
import { UserIdComponent } from '../components/user-id/user-id.component';
import { ShiftInputComponent } from '../components/shift-input/shift-input.component';
import { TaskItemComponent } from '../components/task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone: true,
  imports: [IonContent, IonGrid, IonRow, IonCol, IonLabel, IonItem, IonIcon, UserIdComponent, ShiftInputComponent, TaskItemComponent]
})
export class TasksPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
