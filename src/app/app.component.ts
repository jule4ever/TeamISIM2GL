import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
    var config = {
    apiKey: "AIzaSyCAvyd02zCS4XM9ppJzngePDhudX45NGNY",
    authDomain: "isischool-39715.firebaseapp.com",
    databaseURL: "https://isischool-39715.firebaseio.com",
    projectId: "isischool-39715",
    storageBucket: "isischool-39715.appspot.com",
    messagingSenderId: "869617410999"
  };
  firebase.initializeApp(config);
  }
}

