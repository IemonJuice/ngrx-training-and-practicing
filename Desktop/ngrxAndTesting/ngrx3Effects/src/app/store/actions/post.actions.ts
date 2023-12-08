import { createAction, props } from "@ngrx/store";
import { Post } from "../state/posts.state";

export const successPostLoadAction = createAction(
  '[Post] success loading', props<{ posts: Post[] }>()
)
export const failurePostLoadAction = createAction(
  '[Post] success loading', props<{ error:unknown }>()
)
export const initializePostsAction = createAction(
  '[Post] initialize'
)

export const likePost = createAction(
  '[Post] like', props<{ post:Post }>()
)
