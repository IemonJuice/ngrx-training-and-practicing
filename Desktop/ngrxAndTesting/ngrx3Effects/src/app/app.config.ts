import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { PostEffects } from "./store/effects/post.effects";
import {addToLikedPostsReducer, loadPostsReducer} from "./store/reducers/post.reducers";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideStore({ posts: loadPostsReducer,likedPosts:addToLikedPostsReducer }),
    provideEffects([PostEffects]),
    provideHttpClient(withFetch()),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), provideAnimations()]
};
