import {Component} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {FormsModule, NgForm} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Haptics} from '@capacitor/haptics';
import {AuthService} from '../../../core/services/auth.service';
import {ToastService} from '../../../core/services/toast.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class RegisterComponent {
  hide = true;
  loading = false;

  form = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };

  constructor(
    private auth: AuthService,
    private toast: ToastService,
    private router: Router
  ) {
  }

  async handleSubmit(ngForm: NgForm): Promise<void> {
    if (ngForm.form.invalid) {
      ngForm.form.markAllAsTouched();
      await Haptics.vibrate({duration: 200});
      return;
    }

    if (this.loading) {
      return;
    }

    this.loading = true;

    this.auth
      .register({...this.form, password_confirmation: this.form.password})
      .pipe(take(1))
      .subscribe({
        next: value => {
          if (value) {
            this.toast.success('You have been registered successfully');
            this.router.navigateByUrl('/auth/login').then();
          }
        },
        error: async err => {
          this.loading = false;
          this.toast.error(err.error ?? 'Something went wrong');
          await Haptics.vibrate({duration: 200});
        },
      });
  }
}
