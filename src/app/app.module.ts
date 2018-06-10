import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import {LoginPage} from '../pages/login/login'
import { MenuPage } from '../pages/menu/menu';
import { InscriptionPage } from '../pages/inscription/inscription';
import { FormationPage } from '../pages/formation/formation'
import {IonicStorageModule} from '@ionic/storage';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { AuthService } from '../providers/Authentification/auth.service';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    LoginPage,
    MenuPage,
    InscriptionPage,
    FormationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name:'__mydb',
      driverOrder:['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    LoginPage,
    MenuPage,
    InscriptionPage,
    FormationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider,
    AuthService
  ]
})
export class AppModule {}
