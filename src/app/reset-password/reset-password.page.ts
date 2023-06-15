import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../service/auth.services';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  
  email:any;

  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router,

  ) { }
  
  ngOnInit() {
  }


  ResetPassword() {
    let user = {
      email: this.email,
    }
    this.authService.Reset_Password_User(user).then( async (res :any) => {
      
      console.log(res);

      const ErrorAlert = await this.alertCtrl.create({
        message: "Check Your Email or Gmail to Reset Password.",
        buttons: [
          {
            text: 'ok',
            handler: () => {
              this.router.navigateByUrl("login")
              return true;
            }
          },
          
        ]
      });

      await ErrorAlert.present();

    }).catch( async (error : any) => {

      const ErrorAlert = await this.alertCtrl.create({
        message: "Error :- "+error.message,
        buttons: [
          {
            text: 'ok',
            handler: () => {
              return true;
            }
          },
          
        ]
      });

      await ErrorAlert.present();

      
    });
  }

  // async resetPasswordUser(form: { value: { email: string; }; }): Promise<void> {

  //   this.authService.resetPasswordUser(form.value.email).then(async () => {
  //     const alert = await this.alertCtrl.create({
  //       message: "Check Your Email or Gmail to Reset Password",
  //       buttons: [{ text: 'ok', role: 'cancel', handler: () => {
  //         this.router.navigateByUrl('login');
  //       } }]
  //     });

  //     await alert.present();


  //   }, async (error) => {

  //     const ErrorAlert = await this.alertCtrl.create({
  //       message: error.message,
  //       buttons: [{ text: 'ok', role: 'cancel', handler: () => {
  //         this.router.navigateByUrl('login');
  //       } }]
  //     });

  //     await ErrorAlert.present();
  //   });
  // }

}
