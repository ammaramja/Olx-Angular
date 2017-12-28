import { Component } from '@angular/core';
import { CategoryService } from '../../Services/getCategory/getCategory';
import { SignUpService } from '../../Services/signUp/signUp';
import { SignInService } from '../../Services/signIn/signIn';
import { DisplayUserService } from '../../Services/displayUser/displayUser';
import { SignOutService } from '../../Services/signOut/signOut';
import { SearchAdService } from '../../Services/searchAd/searchAd';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: `./nav-bar.html`,
  providers: [CategoryService, SignUpService, SignInService, DisplayUserService, SearchAdService, SignOutService],
})
export class NavBarComponent {

  categories: Array<any> = [];
  registerObj: any;
  signInObj: Object;
  showSignIn: boolean = false;
  showSignupError: boolean = false;
  showSignInError: boolean = false;
  showSignInSuccess: boolean = false;
  isLoggedIn: boolean = false;

  constructor(myService: CategoryService, private mySearchAdService: SearchAdService, private mySignOutService: SignOutService, private myDisplayService: DisplayUserService, private myRouter: Router, private myRegisterService: SignUpService, private mySignInService: SignInService) {

    myService.getCategories().subscribe((data) => {
      this.categories = data.data.itemList;
      console.log('Received categories in nav-bar: ', this.categories);
    }
    );

    sessionStorage.removeItem('auth-token');
    sessionStorage.removeItem('userId');
  }

  SignUp(fname: any, lname: any, uname: any, pwd: any, mail: any, phone: any) {
    this.myRegisterService.signUp(fname.value, lname.value, uname.value, pwd.value, mail.value, phone.value).subscribe((data) => {
      this.registerObj = data.data;
      console.log('Received registerObj in nav-bar: ', this.registerObj);
      console.log(this.registerObj.message);
      if (this.registerObj.message.includes("successful")) {
        this.showSignIn = true;
        this.showSignupError = false;
      }

    },
      (err) => {
        this.showSignupError = true;
      });
  }

  redirectToSignInModal() {
    document.getElementById('dismissRegisterForm').click();
    (<HTMLFormElement>document.getElementById('RegisterForm')).reset();
    document.getElementById('signIn').click();
    this.showSignIn = false;
    this.showSignupError = false;
  }

  RedirectFromLogin() {
    document.getElementById('dismissLogin').click();
    (<HTMLInputElement>document.getElementById('usernameSignin')).value = "";
    (<HTMLInputElement>document.getElementById('pwdSignin')).value = "";
    this.showSignIn = false;
    this.showSignupError = false;
    this.myRouter.navigate(['displayUser']);

  }

  SignIn(uname: any, pwd: any) {
    this.mySignInService.signIn(uname.value, pwd.value).subscribe((data) => {
      this.signInObj = data.data;
      console.log('Received SignInObj in nav-bar: ', this.signInObj);
      let token: any = this.signInObj['auth-token'];

      sessionStorage.setItem("auth-token", token);
      sessionStorage.setItem("userId", uname.value);

      if (token === null) {
        this.showSignInError = true;
        this.showSignInSuccess = false;
        this.isLoggedIn = false;
      }
      else {
        this.showSignInSuccess = true;
        this.showSignInError = false;
        this.isLoggedIn = true;

        setTimeout(() => {
          this.RedirectFromLogin();
        }, 3000);

      }
    }
    );
  }

  login_check_for_post() {
    let token = sessionStorage.getItem("auth-token");

    if (token === null) {
      this.isLoggedIn = false;
      alert("You need to login first!");
    }
    else {
      console.log(token);
      this.isLoggedIn = true;
      this.myRouter.navigate(['/postAd']);
    }


  }

  display_user_profile() {

    this.myRouter.navigate(['/displayUser']);
  }

  signout_user() {

    this.mySignOutService.signOut().subscribe((data) => {
      if (data.status === 200) {
        this.isLoggedIn = false;
        this.showSignInSuccess = false;

        sessionStorage.removeItem('auth-token');
        sessionStorage.removeItem('userId');
        alert("You have been logged out successfully!");
        this.myRouter.navigate(['']);
      }
      else {
        alert("Error in logging out!");
      }
    });
  }

  searchByCategory(category: any) {
    //console.log(category.name);
    this.myRouter.navigate(['searchByCat', category.name]);
  }



}