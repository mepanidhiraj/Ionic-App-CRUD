import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from "../../service/auth.services";

import { getAuth, onAuthStateChanged } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})

// export class AuthGuard implements CanActivate {

//   constructor(private authService: AuthService,private router: Router) {

//   }
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
//       return new Promise((resolve, reject) => {
//         const auth = getAuth();
  
//         onAuthStateChanged(auth, (user) => {
//           if (user) {
            
//             // this.router.navigateByUrl('home');
            
//             resolve(true);

//           } else {
            
//             console.log('User is not logged in');

//             this.router.navigateByUrl('login');

//             resolve(false);
//           }
//         });
//       });
     
//   }
  
// }

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (!this.authService.getToken()) {
      this.router.navigateByUrl("login"); 
    } 
    return this.authService.getToken();
    
  }


}
