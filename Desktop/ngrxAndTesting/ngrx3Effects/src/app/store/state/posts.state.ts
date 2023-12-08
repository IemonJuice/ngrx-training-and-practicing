export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export const initialState: Post[] = [];
export const initialStateForLikedPosts:Post[] = []
