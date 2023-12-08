import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient} from "@angular/common/http";
import { Post } from "./store/state/posts.state";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  get(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
