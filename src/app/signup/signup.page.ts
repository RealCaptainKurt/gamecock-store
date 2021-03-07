import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import {ActivatedRoute, Router} from '@angular/router';
import { ProfilePage } from '../profile/profile.page';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
	  user = {
      email:"", 
      password:"",
      type:""
    };

  constructor(public afAuth: AngularFireAuth,
    private router:Router,
    private pp:ProfilePage,
    private fbService:FirebaseService) { 
    //empty
  }

  ngOnInit() {
    //empty
  }

  signUpWithEmail(email: string, password: string) {
 
    // i may have copied this code from the example but i had to clean it the hell up
    this.afAuth.createUserWithEmailAndPassword(email, password).then(user => {
		  // navigate to user profile
		  console.log(user.user.email, user.user.uid);
      
		  var db = firebase.firestore();
		  db.collection("usertype").add({
		    'uid':user.user.uid,
		    'usertype': this.user.type 
		  }).then(function(docRef) {
		    console.log("usetype written with ID: ", docRef.id);
        //update this products arrays
		    }).catch(function(error) {
		      console.error("Error adding document: ", error);
		    });

	  }).catch(error => {
		  console.log(error)
	});

  this.pp.signedIn = true;  
  // this.fbService.newUser(email, password, this.user.type);

  // just a go back
  this.router.navigateByUrl('/');
  }

}