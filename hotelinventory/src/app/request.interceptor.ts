import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class requestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Request interceptor", req);
    if(req.method === 'POST') {
      const newRequest = req.clone({headers : new HttpHeaders({'token': '12323234sdfsdfd'})})
      return next.handle(newRequest);
    }
    else {
      return next.handle(req);
    }
  }

}
