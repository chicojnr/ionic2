import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParaMinusculo} from './../../pipes/paraMinusculo';

/*
  Generated class for the TestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/test/test.html',
  pipes: [ParaMinusculo]
})
export class TestPage {

  constructor(private navCtrl: NavController) {

  }

}
