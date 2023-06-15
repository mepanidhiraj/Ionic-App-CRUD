import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';
import { AuthService } from '../service/auth.services';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: any;
  password: any;

  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router,

  ) { 

    // Check Is Login 
    // this.authService.isLogin()
  }

  ngOnInit() {
  }

   loginUser(){

    // alert("Call Login"+this.password)

    
    let user = {
      email:this.email, password:this.password
    }

    this.authService.login_User(user).then( async (res:any) => {

      var token = await res.user.getIdToken();

      console.log("TOken :- ",token);
      console.log(res);

      if(res) {
        window.localStorage.setItem('user' , token);
      }

      console.log("UID :- ",this.authService.getUid());

      // const alert = await this.alertCtrl.create({
      //       message: "UID :- "+this.authService.getUid(),
      //       buttons: [{ text: 'ok', role: 'cancel' }]
      //     });
      
      //     await alert.present();

      this.router.navigateByUrl("home")


    }).catch( async (error:any) => {
      console.log(error);

      const ErrorAlert = await this.alertCtrl.create({
        message: "Error :- "+error.message,
        buttons: [
          {
            text: 'ok',
            handler: () => {
              // this.router.navigateByUrl("login")
              return true;
            }
          },
          
        ]
      });

      await ErrorAlert.present();
      
    });

    
    // this.router.navigateByUrl('home');

    // this.authService.Login_User(this.email, this.password).then( async (res) => {

    //   // const alert = await this.alertCtrl.create({
    //   //   message: "Login",
    //   //   buttons: [{ text: 'ok', role: 'cancel' }]
    //   // });

    //   // await alert.present();
      
    //   console.log(res);
    //   this.router.navigateByUrl('home');

    // }).catch(  (error: { message: any; }) => {
    //   console.log(error.message)
    //   // const alert = await this.alertCtrl.create({
    //   //   message: error.message,
    //   //   buttons: [{ text: 'ok', role: 'cancel' }]
    //   // });

    //   // await alert.present();
    // });

    
  }




  onForgetPassword() {
    this.router.navigateByUrl('reset-password');
  }

  onSignUp() {
    this.router.navigateByUrl('signup');
  }

  // Login() {

  //   if (this.email && this.password) {
  //     this.authObj.signInWithEmailAndPassword(this.email, this.password).then((res) => {

  //       console.log(res);

  //       // window.localStorage.setItem("isLogin", "true");



  //       this.router.navigateByUrl('/home');

  //     }).catch(e => {
  //       console.log(e);
  //     });
  //   }
  // }




}
