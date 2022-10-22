import {Injectable} from '@angular/core';
import {ToastController} from '@ionic/angular';

interface ToastOptions {
  header?: string;
  message?: string;
  cssClass?: string | string[];
  duration?: number;
  position?: 'top' | 'bottom' | 'middle';
  translucent?: boolean;
  animated?: boolean;
  icon?: string;
  keyboardClose?: boolean;
  id?: string;
}

@Injectable({providedIn: 'root'})
export class ToastService {
  private DURATION = 2500;
  private POSITION: 'top' | 'middle' | 'bottom' = 'top';

  constructor(private toastController: ToastController) {
  }


  success(message: string, options: ToastOptions = {}): void {
    this.toastController
      .create({
        message,
        duration: this.DURATION,
        position: this.POSITION,
        color: 'success',
        ...options,
      })
      .then(toast => toast.present());
  }

  warning(message: string, options: ToastOptions = {}): void {
    this.toastController
      .create({
        message,
        duration: this.DURATION,
        position: this.POSITION,
        color: 'warning',
        ...options,
      })
      .then(toast => toast.present());
  }

  error(message: string, options: ToastOptions = {}): void {
    this.toastController
      .create({
        message,
        duration: this.DURATION,
        position: this.POSITION,
        color: 'danger',
        ...options,
      })
      .then(toast => toast.present());
  }

}
