import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.services';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

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


  signUpUser() {
    let user = {
      email:this.email, password:this.password
    }
    this.authService.signUp_User(user).then( (res:any) => {
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

    // this.authService.signUpUser(form.value.email, form.value['password']).then(() => {
    //   this.router.navigateByUrl('home');
    // }, async (error: { message: any; }) => {
    //   const alert = await this.alertCtrl.create({
    //     message: error.message,
    //     buttons: [{ text: 'ok', role: 'cancel' }]
    //   });

    //   await alert.present();
    // });
  }
  

  onLogin() {
    this.router.navigateByUrl("login")
  }

  onForgetPassword() {
    this.router.navigateByUrl('reset-password');
  }

  // SignUp() {
  //   // if (this.email && this.password) {
  //   //   this.authObj.createUserWithEmailAndPassword(this.email, this.password).then(res => {

  //   //     console.log(res);
       
  //   //     this.router.navigateByUrl('/home');

  //   //   }).catch(e => {
  //   //     console.log(e);
  //   //   });
  //   // }


  // }
  
}
