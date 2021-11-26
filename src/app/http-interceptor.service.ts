import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorServicer implements HttpInterceptor{
  intercept(
    request: HttpRequest<any>, next: HttpHandler, 
  ) : Observable<HttpEvent<any>> {
    const storageUser = localStorage.getItem('token');
    const loggedUser = storageUser ? JSON.parse(storageUser) : null;
    if (loggedUser) {
      request = request.clone({
          headers: request.headers.set(
            'Authorization',
            loggedUser.getToken
          )
      });
    }
    return next.handle(request);
  }
   
}
