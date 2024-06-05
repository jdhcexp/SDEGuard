import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonImg, IonGrid, IonRow, IonCol, IonLabel, IonInput, IonButton, IonModal, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonImg, IonGrid, IonRow, IonCol, IonLabel, IonInput, IonButton, IonModal, IonIcon]
})
export class LoginPage implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  

}
