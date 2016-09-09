import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CardTestPage} from './../card-test/card-test';

/*
  Generated class for the NavigationTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/navigation-test/navigation-test.html',
})
export class NavigationTestPage {

  constructor(private navCtrl: NavController) {

  }

  openPage() {
    this.navCtrl.push(CardTestPage, {
      menssagem: "Mensagem teste enviada de NavigationTestPage"
    });
  }
}
