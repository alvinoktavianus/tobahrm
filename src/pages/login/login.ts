import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

import { HomePage } from '../home/home';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  email: string;
  password: string;
  responseData;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public http: Http,
              private alertCtrl: AlertController) {}

  ionViewDidLoad() {
    // console.log('Hello LoginPage Page');
  }

  signin(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    if (this.email == null || this.password == null) {
      this.presentAlert();
    } else {
      let credentials = {
        email: this.email,
        password: this.password
      };

      loading.present();
      console.log(JSON.stringify(credentials));

      this.http
        .post('https://hr-backend.herokuapp.com/api/v1/users/login', JSON.stringify(credentials), {})
        .subscribe(
          data => {
            this.responseData = data;
            let response = JSON.parse(this.responseData._body);
            localStorage.setItem('emplid', response.EmployeeID);
            localStorage.setItem('email', response.Email);
            this.navCtrl.setRoot(HomePage);
          },
          err => this.presentAlert()
        );

      loading.dismiss();
    }
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Please recheck your credentials!',
      buttons: ['OK']
    });
    alert.present();
  }

}
