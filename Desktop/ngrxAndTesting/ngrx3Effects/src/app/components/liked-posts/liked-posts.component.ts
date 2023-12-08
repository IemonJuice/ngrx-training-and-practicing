import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Post } from "../../store/state/posts.state";
import { Observable } from "rxjs";
import { AsyncPipe, NgForOf } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-liked-posts',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule
  ],
  templateUrl: './liked-posts.component.html',
  styleUrls: ['./liked-posts.component.css']
})
export class LikedPostsComponent {
  likedPosts$:Observable<Post[]>;
  constructor(private store:Store<{likedPosts:Post[]}>) {
   this.likedPosts$ = this.store.select('likedPosts');
  }
}
