import { Component, OnInit } from '@angular/core';

import { NgControlStatusGroup } from '@angular/forms';
import { Router } from '@angular/router';

// firebase 
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';




@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  
  department: any;
  name: any;
  
  constructor(
    // private auth: Auth,
    private router:Router,
    private afDB : AngularFireDatabase,
      
  
  ) {} 

  ngOnInit() {
  }

 

  create_Data() {
    
    // var user = this.authObj.cu
    const auth = firebase.auth();
// const database = firebase.database();

    console.log(auth.currentUser?.uid);
    

    let keys = this.afDB.createPushId();

    let row = {
      id:keys,
      name: this.name,
      department : this.department,
    };

    console.log("New Keys :- ",keys)

    this.afDB.object(`users/${auth.currentUser?.uid}/${keys}`).set(row).then( () => {
      this.router.navigateByUrl("/");
    });
    
  }

}
