import {Component} from '@angular/core';
import {IonicModule, NavController} from '@ionic/angular';
import {FormsModule, NgForm} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Haptics} from '@capacitor/haptics';
import {take} from 'rxjs/operators';
import {ToastService} from '../../../core/services/toast.service';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class LoginComponent {
  form = {
    email: '',
    password: '',
  };

  hide = true;
  loading = false;

  constructor(
    private toast: ToastService,
    private auth: AuthService,
    private navController: NavController
  ) {
  }

  async handleLogin(ngForm: NgForm): Promise<void> {
    if (ngForm.invalid) {
      ngForm.form.markAllAsTouched();
      await Haptics.vibrate({duration: 200});
      return;
    }

    if (this.loading) {
      return;
    }

    this.loading = true;

    this.auth
      .login(this.form)
      .pipe(take(1))
      .subscribe({
        next: value => {
          this.loading = false;

          this.toast.success('Logged in successfully!');
          this.navController
            .navigateRoot('/home/tab1', {
              replaceUrl: true,
              animationDirection: 'forward',
            })
            .then();
        },
        error: async err => {
          this.loading = false;
          this.toast.error(err.error ?? 'Something went wrong');
          await Haptics.vibrate({duration: 200});
          this.toast.error(err.error);
        },
      });
  }
}
