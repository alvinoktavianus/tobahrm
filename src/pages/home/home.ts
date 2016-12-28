import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController,
              public http: Http) {

    this.employeeid = localStorage.getItem('emplid');
    this.url = "http://localhost:8888/toba-hr-backend/api/v1/users/"+this.employeeid;
    console.log(this.url);

  }

}
