import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-home',
  template: `
    <ion-tabs>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1">
          <ion-icon name="triangle"></ion-icon>
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2">
          <ion-icon name="ellipse"></ion-icon>
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="contact-us">
          <ion-icon name="call-outline"></ion-icon>
          <ion-label>Contact us</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `,
  imports: [CommonModule, IonicModule],
  standalone: true
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
