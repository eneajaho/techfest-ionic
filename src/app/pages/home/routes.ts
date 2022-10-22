import {Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {Tab1Component} from './components/tab1.component';
import {WishlistComponent} from './components/wishlist.component';
import {ContactUsComponent} from './components/contact-us.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'tab1',
        component: Tab1Component
      },
      {
        path: 'tab2',
        component: WishlistComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: '',
        redirectTo: '/home/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/tab1',
    pathMatch: 'full'
  }
];
