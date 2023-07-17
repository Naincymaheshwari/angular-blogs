import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:5001/blogs'

  sendData(url: string, data: any) {
    const token = window.localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append("Authorization",  "Bearer " + token);
    return this.http.post<any>(this.url + url, data, {headers});
  }

  getData() {
    return this.http.get(this.url);
  }

  getDataById(id: any) {
    return this.http.get(this.url + "/get/" + id);
  }

  updateData(id:any, data:any) {
    const token = window.localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append("Authorization",  "Bearer " + token);
    return this.http.patch<any>(this.url + `/update/${id}`, data, {headers});
  }

  deleteBlog(id:any){
    const token = window.localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append("Authorization",  "Bearer " + token);
    return this.http.delete(this.url + `/delete/${id}`, {headers})
  }
}
