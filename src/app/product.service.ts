import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://api-riyan.herokuapp.com';

  getProduct() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    const options = {
      headers: headers,
      observe: "response" as 'body',
      "responseType?": "json"
    };
    return this.http.get<any>(this.baseUrl + '/product', options);
  }

  getProductById(id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    const options = {
      headers: headers,
      observe: "response" as 'body',
      "responseType?": "json"
    };
    return this.http.get<any>(this.baseUrl + '/product/'+id, options);
  }

  deletProduct(id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    const options = {
      headers: headers,
      observe: "response" as 'body',
      "responseType?": "json"
    };
    return this.http.delete(this.baseUrl + '/product/' + id, options);
  }

  saveProduct(data) {
    console.log('hello');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    const options = {
      headers: headers,
      observe: "response" as 'body',
      "responseType?": "json"
    };
    return this.http.post(this.baseUrl + '/product/',data, options);
  }

  updateProduct(id,data) {
    console.log('hello');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    const options = {
      headers: headers,
      observe: "response" as 'body',
      "responseType?": "json"
    };
    return this.http.put(this.baseUrl + '/product/'+id ,data, options);
  }

  signup(user)
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    const options = {
      headers: headers,
      observe: "response" as 'body',
      "responseType?": "json"
    };
    return this.http.post(this.baseUrl + '/user/signup',user, options);
  }


  login(user)
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    const options = {
      headers: headers,
      observe: "response" as 'body',
      "responseType?": "json"
    };
    return this.http.post<any>(this.baseUrl + '/user/login',user, options);
  }

  isLoggedIn()
  {
    if(localStorage.getItem('token') == null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }
}
