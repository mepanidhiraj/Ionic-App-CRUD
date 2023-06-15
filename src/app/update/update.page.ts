import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

// firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import { Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  data: any = { };

  department: any;
  name: any;
  my_id :any;
  
  constructor(
     private firebaseDB: AngularFireDatabase,
     private router:Router,
    
    ) { 

      // get Url Parameter
      let d = this.router.getCurrentNavigation()?.extras?.state
      if(d) {
        this.my_id = d['id'];
      }
      

    
      this.getData();
    }

  ngOnInit() {
    // this.getData();
  }

  async getData() {

    const auth = firebase.auth();
    
    console.log(auth.currentUser?.uid);
 
    var ref = await this.firebaseDB.database.ref(`users/${auth.currentUser?.uid}/${this.my_id}`).once('value').then( (data) => {
      
      console.log(data.val());

      this.data = data.val()

      
      
      // this.data['department'] = data.val()['department']
      // var jsonRequest = JSON.parse(JSON.stringify( data.val()));
      // console.log("JSONREQUEST :????>>>>>>>" + JSON.stringify(jsonRequest) );
      
    });

    // Set Data 
    this.name = this.data['name'];
    this.department = this.data['department'];


    console.log("DATA :- ",this.data);


  }

  Update_Data() {

    const auth = firebase.auth();

    this.firebaseDB.object(`users/${auth.currentUser?.uid}/${this.my_id}`).update({
      name: this.name,
      department : this.department,
    }).then( () => {
      this.router.navigateByUrl("home");
    });

  }

}
