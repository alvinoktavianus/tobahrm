import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  username: string;
  employeeid: any;
  url: string;

  constructor(public navCtrl: NavController,
              public http: Http,
              public storage: Storage) {

    this.storage.get('emplid').then((emplid_value) => { this.employeeid = emplid_value; });

    this.url = "http://localhost:8888/toba-hr-backend/api/v1/users/"+this.employeeid;
    console.log(this.url);

  }

}
