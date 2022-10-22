import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact-us-component',
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
      <div style="display: flex; justify-content: center">
        <h1>Have a new idea?</h1>
      </div>
      <form
        ngForm
        #ngForm="ngForm"
        (ngSubmit)="handleSubmitForm(ngForm)" style="margin-top: 30px">
        <ion-item lines="full" class="ion-margin-top" style="padding: 0 20px">
          <ion-label position="floating">Name</ion-label>
          <ion-input
            [required]="true"
            #nameInput="ngModel"
            type="text"
            [(ngModel)]="form.name"
            [clearInput]="true"
            placeholder="Your name">
          </ion-input>
          <span slot="error" *ngIf="nameInput.hasError('required') && nameInput.touched">
                Name is required!
          </span>
        </ion-item>
        <ion-item lines="full" class="ion-margin-top" style="padding: 0 20px">
          <ion-label position="floating">Email</ion-label>
          <ion-input
            [required]="true"
            #emailInput="ngModel"
            type="text"
            [(ngModel)]="form.email"
            [clearInput]="true"></ion-input>
          <span slot="error" *ngIf="emailInput.hasError('required') && emailInput.touched">
               Email is required!
          </span>
        </ion-item>
        <ion-item lines="full" class="ion-margin-top ion-margin-bottom" style="padding: 0 20px">
          <ion-label position="floating">Your idea</ion-label>
          <ion-textarea
            [required]="true"
            #messageInput="ngModel"
            placeholder="Your idea"
            type="text"
            [(ngModel)]="form.message">
          </ion-textarea>
          <span slot="error" *ngIf="messageInput.hasError('required') && messageInput.touched">
               Message is required!
          </span>
        </ion-item>
        <ion-button
          color="primary"
          type="submit"
          expand="block"
          class="ion-margin-top ion-padding-horizontal"
          [disabled]="submitting">
          <ion-icon slot="start" name="search"></ion-icon>
          Contact us
        </ion-button>
      </form>
    </ion-content>
  `,
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
})

export class ContactUsComponent implements OnInit {
  submitting = false;
  form = {
    name: '',
    email: '',
    message: ''
  };

  constructor() {
  }

  ngOnInit() {
  }

  handleSubmitForm(payload) {
    this.submitting = true;

    setTimeout(() => {
      this.submitting = false;
    }, 1000);
  }
}
