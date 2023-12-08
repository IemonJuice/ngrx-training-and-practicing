import {createReducer, on} from "@ngrx/store";
import {initialState, initialStateForLikedPosts} from "../state/posts.state";
import {likePost, successPostLoadAction} from "../actions/post.actions";

export const loadPostsReducer = createReducer(
  initialState,
  on(successPostLoadAction, (state, {posts}) => posts),
)

export const addToLikedPostsReducer = createReducer(
  initialStateForLikedPosts,
  on(likePost, (state, {post}) => {
    return [...state, post]
  }),
)
