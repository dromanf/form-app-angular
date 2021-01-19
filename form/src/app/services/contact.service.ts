import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  public sendComment(comment: Comment) {
    console.log('sending comment', comment);
    this.http.post<Comment>(`${environment.API_URL}/contact`, comment)
    .subscribe(res => console.log(res));
  }
}
