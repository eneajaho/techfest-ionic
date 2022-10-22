import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-wish-card-component',
  template: `
    <div class="wish-card">
      <div class="left-part">
        <div class="code">{{ wish.code | uppercase }}</div>

        <div class="details">
          <div class="detail">
            <div class="label">Credit:</div>
            <div class="value">{{ wish.credit | currency }}</div>
          </div>
          <div class="detail">
            <div class="label">Redeemed at:</div>
            <div class="value">{{ wish.redeemed_at | date }}</div>
          </div>
        </div>
      </div>
      <div class="right-part">
        <ion-label class="status">
<!--          <ion-badge [color]="wishStatusColor(wish.status)">-->
            {{ wish.status | titlecase }}
<!--          </ion-badge>-->
        </ion-label>
      </div>

      <div class="dot right-dot"></div>
      <div class="dot left-dot"></div>
    </div>
  `,
  styles: [
    `
      .wish-card {
        display: grid;
        grid-template-columns: 5fr 1fr;
        background: linear-gradient(135deg, #283593, #7158fe);
        color: #fff;
        min-height: 150px;
        text-align: center;
        box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.15);
        position: relative;
      }

      .left-part {
        display: grid;
        place-content: center;
      }

      .right-part {
        border-left: 1px dashed white;
        display: grid;
        place-content: center;
      }

      .code {
        font-family: monospace;
        font-size: 28px;
        border: 1px dashed white;
        padding: 5px 10px;
      }

      .status {
        transform: rotate(90deg);
      }

      .details {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 10px;

      .detail {
        display: grid;
        grid-template-rows: 1fr 1fr;

      .value {
        font-size: 18px;
        font-weight: bold;
      }

      .dot {
        background: var(--ion-color-dark-contrast);
        width: 30px;
        height: 30px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      .left-dot {
        left: -15px;
      }

      .right-dot {
        right: -15px;
      }
    `,
  ],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ]
})

export class WishCardComponent implements OnInit {
  @Input() wish: any;

  constructor() {
  }

  ngOnInit() {
  }
}

