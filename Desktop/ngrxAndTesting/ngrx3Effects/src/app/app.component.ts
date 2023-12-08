import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AllPostsComponent } from "./components/all-posts/all-posts.component";
import { LikedPostsComponent } from "./components/liked-posts/liked-posts.component";
import { Store } from '@ngrx/store';
import { initializePostsAction } from "./store/actions/post.actions";
import { MatTabsModule } from "@angular/material/tabs";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AllPostsComponent, LikedPostsComponent, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private store: Store) {
    this.store.dispatch(initializePostsAction());
  }
}
