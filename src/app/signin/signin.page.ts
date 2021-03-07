import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilePage } from '../profile/profile.page';

import {AngularFirestore } from '@angular/fire/firestore';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  user= {email:"temp@gmail.com", password:"12345"}

  constructor(public afAuth: AngularFireAuth, 
  	private fbService: FirebaseService,
  	private router:Router,
  	public firebase:AngularFirestore,
    private pp: ProfilePage) { }

  ngOnInit() {
  }

  signInWithEmail(email: string, password: string) {
  	// Promise<firebase.auth.UserCredential>
    console.log("signin ...");
    this.afAuth.signInWithEmailAndPassword(email, password).then(user => {
  		// navigate to user profile
  		console.log(user.user.email, user.user.uid);
  		this.fbService.loadMyOrders();

  		var user1 = firebase.auth().currentUser;
  		console.log(user1.uid)
  		this.fbService.setUID(user.user.uid);
  		
  		var db = firebase.firestore();
  		var self=this;
  		db.collection("usertype").where("uid", "==", user1.uid).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          var type = doc.data().usertype;
          console.log("usertype:"+type);
          self.fbService.setUserType(type); 
        });
      }).catch(function(error) {
        console.log("Error getting documents: ", error);
      });
      //this.pp.isSignedIn(true);
      this.goBack();
	  }).catch(error => {
	  	console.log(error)
	  }); 
  }

  signup(){
  	this.router.navigate(["/signup"])
  }

  loginGoogle(){
  	var provider = new firebase.auth.GoogleAuthProvider();
  	var self=this;
  	firebase.auth().signInWithPopup(provider).then((result) => {
      // What is this??
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user)
        self.fbService.setUID(user.uid);
        self.fbService.loadMyOrders();
        self.fbService.setUserType("visitor");
      //this.pp.isSignedIn(true);
      this.goBack();
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    });
  }

  goBack() {
    console.log("clicked goBack");
    this.router.navigate(["../tabs/ProductListPage"]);
  }
}