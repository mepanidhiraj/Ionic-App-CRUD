import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


// firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {

  my_id:any;

  constructor(private firebaseDB: AngularFireDatabase,
    private router:Router,) {

      // get Url Parameter
      let d = this.router.getCurrentNavigation()?.extras?.state
      if(d) {
        this.my_id = d['id'];
      }

     }

  ngOnInit() {
   this.Delete_Data()
  }

  Delete_Data() {
    const auth = firebase.auth();

    this.firebaseDB.object(`users/${auth.currentUser?.uid}/${this.my_id}`).remove();

    alert("Do You Want to Deleted. ?")

    this.router.navigateByUrl('home')

  }
}
