import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



// import firebase + enviornment
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

// forms
import { FormsModule } from '@angular/forms';



// import * as firebase from 'firebase/app';

// firebase.initializeApp(environment.firebaseConfig);


// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
//   providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}



@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}




// @NgModule({
//   declarations: [AppComponent],
  
//   imports: [
//     BrowserModule,
//     IonicModule.forRoot(),
//     AppRoutingModule,
//     provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
//     // provideAuth(() => getAuth()),
//     // provideFirestore(() => getFirestore()),
//   ],
//   providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}