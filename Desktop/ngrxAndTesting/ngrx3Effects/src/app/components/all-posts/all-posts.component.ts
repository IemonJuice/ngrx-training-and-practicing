import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Post } from '../../store/state/posts.state';
import { Observable } from "rxjs";
import { AsyncPipe, NgForOf } from "@angular/common";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatButtonModule } from "@angular/material/button";
import {likePost} from "../../store/actions/post.actions";

@Component({
  selector: 'app-all-posts',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule
  ],
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent {
  posts$:Observable<Post[]>
  constructor(private store: Store<{posts:Post[]}>) {
   this.posts$ = this.store.select('posts');
  }
  addToLikedPosts(post:Post):void{
    this.store.dispatch(likePost({post}))
  }
}
