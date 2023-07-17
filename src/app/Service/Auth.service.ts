import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:5001/user'

  signup(url: string, data: any) {
    return this.http.post<any>(this.url + url, data);
  }

  login(url: string, data: any) {
    return this.http.post<any>(this.url + url, data);
  }

  isUserLoggedIn() {
    const token = window.localStorage.getItem("token");
    if (token) {
      return true;
    }
    return false;
  }

  userLoggedOut() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("email");
  }
}
