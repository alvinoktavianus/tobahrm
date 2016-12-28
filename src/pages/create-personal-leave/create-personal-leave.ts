import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the CreatePersonalLeave page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-personal-leave',
  templateUrl: 'create-personal-leave.html'
})
export class CreatePersonalLeavePage {

  leaveFrom: String;
  leaveTo: String;
  leaveDescription: String;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    // console.log('Hello CreatePersonalLeavePage Page');
  }

  createPersonalLeave() {
    let personalLeaveData = {
      from: this.leaveFrom,
      to: this.leaveTo,
      description: this.leaveDescription
    };
    console.log(JSON.stringify(personalLeaveData));
  }

}
