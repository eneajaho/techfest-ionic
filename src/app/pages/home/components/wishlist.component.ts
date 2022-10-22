import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-wishlist-component',
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title>Contact us</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large" color="primary">Contact us</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-refresher (ionRefresh)="refresh($event)" slot="fixed">
        <ion-refresher-content refreshingSpinner="crescent">
        </ion-refresher-content>
      </ion-refresher>

      <div *ngIf="wishList$ | async as wishes" style="display: grid; gap: 15px">
        <app-wish-card
          *ngFor="let voucher of wishes; trackBy: trackItems"
          [wish]="voucher"
          (click)="previewVoucher(voucher.preview_url)">
        </app-wish-card>
      </div>

      <ng-container *ngIf="loading">
        <div class="ion-text-center ion-margin ion-padding">
          <ion-spinner name="crescent"></ion-spinner>
        </div>
      </ng-container>
    </ion-content>
  `,
  standalone: true,
  imports : [CommonModule, IonicModule],
})

export class WishlistComponent implements OnInit {
  loading= false;
  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
  }

  refresh(event) {
    this.homeService.loadWishList();
  }

  trackItems(index: number, itemObject: any) {
    return itemObject.id;
  }
}
