import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

constructor(private http: HttpClient) { }

url = 'http://localhost:5001/blog/'

sendComment(blogId: number, data: any){
  const token = window.localStorage.getItem('token');
  let headers = new HttpHeaders();
  headers = headers.append("Authorization",  "Bearer " + token);
  return this.http.post<any>(this.url + blogId + "/add-comment" , data, {headers});
}

getComments(blogId: number) {
  return this.http.get<any>(this.url + blogId + "/comments" );
}

updateComment(commentId: number, data: any){
  const token = window.localStorage.getItem('token');
  let headers = new HttpHeaders();
  headers = headers.append("Authorization",  "Bearer " + token);
  return this.http.patch<any>(this.url + "update-comment/" + commentId  , data, {headers});
}
}
