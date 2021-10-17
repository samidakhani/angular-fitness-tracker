import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
   private authenticated: boolean;

   constructor(private authStore: AngularFireAuth, private router: Router,
    private snackBar: MatSnackBar){}

   initAuthenticate(){
    this.authStore.authState.subscribe(user => {
      if(user) {
        console.log("logged in");
      } else {
        console.log("logged out");
      }
    });
   }

   signup(email:string, password: string) {
    this.authStore.createUserWithEmailAndPassword(email, password)
      .then((response) => {
        this.router.navigate(["/"]);
      }).catch(ex => {
        this.snackBar.open(ex.message, null, {
          duration: 2000,
        });
      });
   }

   login(email:string, password: string) {
    this.authStore.signInWithEmailAndPassword(email, password)
     .then((response) => {
        this.router.navigate(["/"]);
      }).catch(ex => {
        this.snackBar.open(ex.message, null, {
          duration: 2000,
        });
      });
   }

   logout() {
     this.authStore.signOut();
     console.log("LoggedOut...");
   }

}
