import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public alertCtrl: AlertController,
              public storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Page One', component: Page1 },
      { title: 'Page Two', component: Page2 }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      let employeeid, employeemail;

      this.storage.get('emplid').then((emplid_value) => { employeeid = emplid_value; });
      this.storage.get('email').then((email_value) => employeemail => { employeemail = email_value; });

      if ( employeeid == undefined && employeemail == undefined ) {
        this.nav.setRoot(LoginPage);
      }

      console.log(employeeid, employeemail);

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
            this.storage.set('emplid', undefined);
            this.storage.set('email', undefined);
            this.nav.setRoot(LoginPage);
          }
        }
      ]
    });
    alert.present();
  }
}
