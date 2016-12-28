import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public alertCtrl: AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Page1 },
      { title: 'Personal Leave', component: Page2 },
      { title: 'Profile', component: ProfilePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      let employeeid, employeemail;

      employeeid = localStorage.getItem('emplid');
      employeemail = localStorage.getItem('email');

      console.log(employeeid, employeemail);
      if ( employeeid == '' || employeemail == '' || employeeid == null || employeemail == null) {
        this.nav.setRoot(LoginPage);
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  signout() {
    let alert = this.alertCtrl.create({
      title: 'Confirm sign out',
      message: 'Are you sure you want to sign out?',
      buttons: [
        {
          text: 'No'
        },
        {
          text: 'Yes',
          handler: () => {
            localStorage.setItem('emplid', '');
            localStorage.setItem('email', '');
            this.nav.setRoot(LoginPage);
          }
        }
      ]
    });
    alert.present();
  }
}
