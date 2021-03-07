import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// idk if we need this line but i copied it anyway
//import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHC7QOHkgcAGXXdkO1JOr0mCvcgaRQETM",
  authDomain: "gamecock-store-22949.firebaseapp.com",
  projectId: "gamecock-store-22949",
  storageBucket: "gamecock-store-22949.appspot.com",
  messagingSenderId: "209540310222",
  appId: "1:209540310222:web:fe7c2681d97a4f11795c9f",
  measurementId: "G-STF5CNZ4QJ"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    AngularFireAuthModule, AngularFireModule.initializeApp(firebaseConfig)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
