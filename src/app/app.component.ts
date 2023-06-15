import { Component } from '@angular/core';
import { firebaseApp$ } from '@angular/fire/app';
// import * as firebase from 'firebase/app'
import { firebaseConfig } from './firebase.config';


// firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.services';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  platform: any;
  statusBar: any;
  splashScreen: any;
  route: any;
  constructor(private authService: AuthService,private router: Router) {
    
    this.initializeApp();
  }

  //Inside InitializeApp Funcation just add this 

initializeApp() {
  if (this.authService.getToken()) {
    this.router.navigateByUrl('home')
  } 


    // this.platform.ready().then(() => {
    //   this.statusBar.styleDefault();
    //   this.splashScreen.hide();

    //   if (!this.authService.getToken()) {
    //     this.router.navigateByUrl('login')
    //   } else {
    //     this.router.navigateByUrl("home");
    //   }
      
      
    // });



  }

  // initializeApp() {
  //   firebase.initializeApp(firebaseConfig);
  // }

  // checkLogin() {
    
      
  //     if(this.authService.getUid()) {
  //       this.router.navigateByUrl('home')
  //     } else {
  //       this.router.navigateByUrl('login')
  //     }
  // }


}
