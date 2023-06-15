import { Component, OnInit } from '@angular/core';

import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

// firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../service/auth.services';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  [x: string]: any;
  loged_User: any;
  dataList: any = [];
  MydataList: any = [];
  myname = "TEST"
  keys: any = [];
  requests: Promise<any[]> | undefined;
  auth: any;

  constructor(
    private router: Router,
    private authObj: AngularFireAuth,
    private firebaseDB: AngularFireDatabase,
    private authService: AuthService,
    private alertCtrl: AlertController,
  ) {

    if(localStorage.getItem("isLogin")) {
      this.router.navigateByUrl("home")
    }

    this.auth = firebase.auth();

    // this.getLoggedInUser()


    
    // Check Is Login 
    // this.authService.isLogin()

    // if(String(this.authService.isLogin()) === "true") {
    //   this.router.navigateByUrl("home")
    // } else {
    //   this.router.navigateByUrl("login")
    // }

  }

  ionViewWillEnter() {

    // Logeded_User
    this.getLoggedInUser()

    this.getData()
  }

  ngOnInit() {

    this.getData();
  }

  Logout() {
    
    this.authService.Logout_User().then( async (res : any) => {
      console.log(res);

      this.router.navigateByUrl('login')


      // const alert = await this.alertCtrl.create({
      //   message: "Do You Want to Logout..?",
        
      //   buttons: [
      //     {
      //       text: 'Yes',
      //       handler: () => {
      //         this.router.navigateByUrl("login")
      //         return true;
      //       }
      //     },
      //     {
      //       text: 'No',
            
      //     }
      //   ]
      // });

      // await alert.present();

    }).catch( (error : any) => {

    });

    console.log("Logout...")
    
    // this.authObj.signOut().then((res: any) => {

    //   // alert("Logout.....");
      
    //   this.router.navigateByUrl('login')

    //   // window.localStorage.setItem("isLogin", "false");

    //   console.log(res);

    // }).catch((e: any) => {
    //   console.log(e);
    // });

  }
  getLoggedInUser() {

    // let isLogin = localStorage.getItem("isLogin");
    // alert("aaa")

    // if(localStorage.getItem("isLogin") === "true") {
    //   // alert("Wellcome")
    //   this.router.navigateByUrl('home')
    // } else {
    //   // alert("try Again...")
    //   this.router.navigateByUrl('login')
    // }


    // var user = firebase.auth().currentUser;

    // alert(user?.email)

    // if(user==null) {
    //   alert("Try Again...");
    //   this.router.navigateByUrl('login')
    // } else {
      
    //   alert("Wellcome to Ionic");
    //   this.router.navigateByUrl('home')
    // }

    // return user;
  }

  onCreated() {
    this.router.navigateByUrl('create')
  }

  onReaded() {
    this.router.navigateByUrl('read')
  }

  onUpdated(id: any) {
    console.log("ID :- ", id);

    let navigationExtras: NavigationExtras = { state: { id: id } };

    this.router.navigateByUrl('update', navigationExtras)

  }

  onDeleted(id: any) {

    console.log("ID :- ", id);

    let navigationExtras: NavigationExtras = { state: { id: id } };

    this.router.navigateByUrl('delete', navigationExtras)

  }

  

  async getData() {

    this.loged_User = this.auth.currentUser?.displayName;

    // alert("User :- ",this.loged_User)

    await this.firebaseDB.database.ref(`users/${this.auth.currentUser?.uid}`).once('value').then((data) => {
      console.log(data.val())

      const response_data = data.val();
      const requests = [];
      for (const key in response_data) {
        if (response_data.hasOwnProperty(key)) {
          requests.push(response_data[key]);
        }
      }

      this.MydataList = requests;

      console.log(requests)
    })




    // console.log("DATA Set :- ",this.dataList);

    // this.keys = Object.keys(this.dataList)
    // var i = 0;
    // this.keys.forEach((element: any) => {

    //   console.log(this.dataList[element]);

    //   this.MydataList[String(i)] = [{ "{element}": this.dataList[element] }];

    //   i = i + 1;
    // });

    // for(let key of Object.keys(this.dataList)) {
    //   // this.keys = data;
    //   // console.log(key);
    //   // console.log(this.dataList[key]);
    //   console.log("Try Key :- ",key)
    //   // this.dataList = this.dataList[key]

    // }



    console.log("Try Data :- ", this.MydataList);

    // if (this.MydataList.length === 0) {
    //   this.getData()
    // }




  }

}
function logout() {
  throw new Error('Function not implemented.');
}

