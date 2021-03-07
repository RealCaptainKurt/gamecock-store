import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  signedIn = false;

  constructor(private router:Router) { }

  ngOnInit() {
    if (!this.signedIn) {
      this.goToSignIn();
    }
  }

  isSignedIn(value:boolean) {
    if(value) {
      this.signedIn = true;
    } else {
      this.signedIn = false;
    }
  }

  goToSignIn() {
    console.log("navigating to signin");
    this.router.navigate(["../tabs/SignInPage"]);
  }

  goBack() {
    console.log("clicked goBack");
    this.router.navigate(["../tabs/ProductListPage"]);
  }

}
