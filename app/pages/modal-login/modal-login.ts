import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

/*
  Generated class for the ModalLoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/modal-login/modal-login.html',
})
export class ModalLoginPage {
  user: any = {};
  constructor(private navCtrl: NavController, public viewCtrl: ViewController, public params: NavParams) {
    console.log('dados recebidos', params.get('action'));
  }
  entrar() {
    this.viewCtrl.dismiss(this.user);

  }

  close() {
    this.viewCtrl.dismiss();
  }
}
