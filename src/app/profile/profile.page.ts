import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonGrid, IonRow, IonCol, IonLabel, IonItem, IonIcon, IonButton, IonCard } from '@ionic/angular/standalone';
import { UserIdComponent } from '../components/user-id/user-id.component';
import { ShiftInputComponent } from '../components/shift-input/shift-input.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonContent, IonGrid, IonRow, IonCol, IonLabel, IonItem, IonIcon, IonButton, IonCard, UserIdComponent, ShiftInputComponent, FooterComponent]
})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
