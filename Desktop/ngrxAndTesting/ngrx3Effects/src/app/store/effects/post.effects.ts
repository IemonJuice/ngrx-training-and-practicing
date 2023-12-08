import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpService } from "../../httpservice.service";
import { Store } from "@ngrx/store";
import { failurePostLoadAction, initializePostsAction, successPostLoadAction } from "../actions/post.actions";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class PostEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initializePostsAction),
      switchMap(() => this.httpService.get().pipe(
        () => {
          return this.httpService.get().pipe(
            map((posts) => {
              return successPostLoadAction({posts});
            }),
            catchError((error) => {
              return of(failurePostLoadAction({error}));
            })
          )
        }))
    ))

  constructor(
    private actions$: Actions,
    private httpService: HttpService,
    ) {}
}
