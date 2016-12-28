import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreatePersonalLeavePage } from '../pages/create-personal-leave/create-personal-leave';
import { PersonalLeavePage } from '../pages/personal-leave/personal-leave';

import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PersonalLeavePage,
    CreatePersonalLeavePage,
    LoginPage,
    ProfilePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PersonalLeavePage,
    CreatePersonalLeavePage,
    LoginPage,
    ProfilePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
