import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {ModalLoginPage} from './../modal-login/modal-login';

/*
  Generated class for the ModalTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/modal-test/modal-test.html',
})
export class ModalTestPage {

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) {}

  openModal() {
    let modal = this.modalCtrl.create(ModalLoginPage, {
      action: {
        saudacao: 'olá',
        text: 'lorem ipsun'
      }
    });
    modal.onDidDismiss((param) => {
      console.log("Dados do usuário: ", param);
    });
    modal.present();
  }
}
