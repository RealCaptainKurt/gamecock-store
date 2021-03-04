import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
// these two are errors, not sure we need them
//import { SplashScreen } from '@ionic-native/SplashScreen/ngx';
//import { StatusBar } from '@ionic-native/StatusBar/ngx';
import { ItemService } from './item.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    public itemService: ItemService,
    public firebase: AngularFirestore
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      var db = this.firebase;

      db.collection("items").add({
        name: "temp",
        price: 9,
        category: "food",
        photo: "temp",
        description: "description"
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    });
  }
}