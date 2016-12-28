import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreatePersonalLeavePage } from '../create-personal-leave/create-personal-leave';

/*
  Generated class for the PersonalLeave page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-personal-leave',
  templateUrl: 'personal-leave.html'
})
export class PersonalLeavePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    // console.log('Hello PersonalLeavePage Page');
  }

  createPersonalLeave() {
    this.navCtrl.push(CreatePersonalLeavePage);
  }

}
