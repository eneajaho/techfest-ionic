import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-tab-1-component',
  template: `tab 1`,
  standalone: true,
  imports : [CommonModule, IonicModule],
})

export class Tab1Component implements OnInit {
  constructor() {
  }

  ngOnInit() {



  }
}
