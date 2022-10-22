import { ChangeDetectorRef, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';

// import Swiper core and required modules
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import SwiperCore, { Lazy, Pagination, SwiperOptions, Virtual } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Virtual, Lazy]);

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  standalone: true,
  imports: [SwiperModule, CommonModule, RouterModule, IonicModule],
  encapsulation: ViewEncapsulation.None,
})
export class IntroComponent {
  config: SwiperOptions = {
    pagination: true,
    virtual: true,
    slidesPerView: 1,
  };

  showSkip = true;

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  constructor(
    private navController: NavController,
    private cd: ChangeDetectorRef
  ) {
  }

  startApp() {
    this.navController
      .navigateRoot('/home')
      .then(() => {
        localStorage.setItem('ion_intro_tutorial_finished', 'true');
      });
  }

  onSlideChange() {
    this.showSkip = !this.swiper.swiperRef.isEnd;
    this.cd.detectChanges();
    console.log('onSlideChange', this.swiper);
  }
}
