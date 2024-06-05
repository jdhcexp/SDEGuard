import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonGrid, IonRow, IonCol, IonLabel, IonItem, IonIcon, IonTextarea, IonButton } from '@ionic/angular/standalone';
import { UserIdComponent } from '../components/user-id/user-id.component';
import { ShiftInputComponent } from '../components/shift-input/shift-input.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [IonContent, IonGrid, IonRow, IonCol, IonLabel, IonItem, IonIcon, IonTextarea, IonButton, UserIdComponent, ShiftInputComponent, FooterComponent]
})
export class NewsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
