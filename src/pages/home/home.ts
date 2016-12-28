import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string;
  employeeid: any;
  url: string;
  responseData;

  constructor(public navCtrl: NavController,
              public http: Http,
              public alertCtrl: AlertController) {

    if ( localStorage.getItem('emplid') != '' && localStorage.getItem('emplid') != null ) {
      this.employeeid = localStorage.getItem('emplid');
      this.url = "https://hr-backend.herokuapp.com/api/v1/users/"+this.employeeid;
      this.getCurrentProfile(this.url);
    }

  }

  getCurrentProfile(url: string) {
    this.http
      .get(url, {})
      .subscribe(
        data => {
          this.responseData = data;
          let response = JSON.parse(this.responseData._body);
          this.username = response.FullName;
          console.log(data);
        }
      );
  }

  checkIn(){
    let confirmCheckIn = this.alertCtrl.create({
      title: 'Check In?',
      message: 'Are you sure you want to Check In?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log("No in check in clicked");
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.sendCheckInData();
          }
        }
      ]
    });
    confirmCheckIn.present();
  }

  sendCheckInData() {
    let alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: 'Successfull check in.',
      buttons: ['OK']
    });
    alert.present();
  }

  checkOut() {
    let confirmCheckOut = this.alertCtrl.create({
      title: 'Check Out?',
      message: 'Are you sure you want to Check Out?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log("No in check out clicked");
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.sendCheckOutData();
          }
        }
      ]
    });
    confirmCheckOut.present();
  }

  sendCheckOutData(){
    let alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: 'Successfull check out.',
      buttons: ['OK']
    });
    alert.present();
  }

}
