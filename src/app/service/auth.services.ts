import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


// firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// import * as firebaseConfig from 'firebase/app';

// firebase.initializeApp(firebaseConfig);

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afs: AngularFireAuth,private router:Router) { }

  getToken() {
  	return !!localStorage.getItem('user')
  }


  signUp_User(user: { email: string, password: string }) {
    localStorage.setItem("isLogin","true")
    return this.afs.createUserWithEmailAndPassword(user.email, user.password);
  }


  login_User(user: { email: string, password: string }) {
    localStorage.setItem("isLogin","true")
    return this.afs.signInWithEmailAndPassword(user.email, user.password);
  }


  getUid() {
    return firebase.auth().currentUser?.uid
  }

  Logout_User() {
    localStorage.setItem("isLogin","false")
    localStorage.setItem('user',"")


    return this.afs.signOut();
  }

  Reset_Password_User(user: { email: string }) {
    return this.afs.sendPasswordResetEmail(user.email);
  }

  isLogin() {
    
    let isLogin : any;

  

    if (firebase.auth().currentUser?.uid && localStorage.getItem("isLogin") === "true") {
      
      isLogin = window.localStorage.getItem("user");
      
      
      this.router.navigateByUrl("home")
      
      return isLogin;

    } else {

      isLogin = localStorage.getItem("user");

      this.router.navigateByUrl("login")

      return isLogin;

    }
  }


  // Login_User(email: string, password: string) {
  //   console.log("Email :- ",email)
  //   console.log("Password :- ",password)
  //   firebase.auth().signInWithEmailAndPassword(email, password);

  // }

  // signUp_User(email: string, password: string) {
  //   firebase.auth().createUserWithEmailAndPassword(email, password);

  // }

  // resetPasswordUser(email: string) : Promise<void> {
  //   return firebase.auth().sendPasswordResetEmail(email);
  // }

  // logoutUser() {
  //   firebase.auth().signOut();
  //   this.router.navigateByUrl("login")
  //   // return firebase.auth().signOut();
  // }


}
