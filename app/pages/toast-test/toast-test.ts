import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

/*
  Generated class for the ToastTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/toast-test/toast-test.html',
})
export class ToastTestPage {

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {  }
  showToast() {
    let toast = this.toastCtrl.create({
      message: 'Ola mundo',
      duration: 2000,
      showCloseButton: true,
      closeButtonText: 'Ok',
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('toast fechado');
    })
    toast.present();
  }
}
