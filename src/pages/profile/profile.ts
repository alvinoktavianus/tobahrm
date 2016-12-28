import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  private url: string;
  private responseData;
  public response;

  constructor(public navCtrl: NavController,
              public http: Http) {
    
    this.url = "https://hr-backend.herokuapp.com/api/v1/users/" + localStorage.getItem('emplid');

    this.getCurrentProfile(this.url);

    console.log(this.url);

  }

  ionViewDidLoad() {
    // console.log('Hello ProfilePage Page');
  }

  getCurrentProfile(url: string) {
    this.http
      .get(url, {})
      .subscribe(
        data => {
          this.responseData = data;
          this.response = JSON.parse(this.responseData._body);
        }
      );
  }

}
