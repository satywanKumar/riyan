import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

import { ProductService } from './product.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req,next){
    let productService = this.injector.get(ProductService);
    let tokenizedReq = req.clone(
      {
        headers:req.headers.set('Authorization', 'Bearer ' + productService.getToken())
      }
    )
    return next.handle(tokenizedReq)
  }
}
