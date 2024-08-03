// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { AuthService } from 'src/app/services/auth.service';
// import { keyframes } from '@angular/animations';

// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {

//   constructor(private auth:AuthService) {}

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     debugger
//     const myToken = this.auth.getToken();
//     console.log(myToken);
//     if(myToken){
//       let token = (myToken.replace(/['"]+/g, ''));
//       request = request.clone({
//         setHeaders:{Authorization:`Bearer ${token}`}
//       })
//     }
//     return next.handle(request);
//   }
// }


import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const myToken = this.auth.getToken();
      if (myToken) {
        let token = myToken.replace(/['"]+/g, '');
        request = request.clone({
          setHeaders: { Authorization: `Bearer ${token}`}
        });
      }
  
    return next.handle(request);
  }

 
}