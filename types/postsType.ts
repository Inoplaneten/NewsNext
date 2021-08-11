export type Comment = {
    id: null | number,
    postId: null | number,
    body: null | string,
};

export type Post = {
    id: null | number
    title: null | string
    body: null | string,
    comments?: [] | Comment[]
};

export interface PostsState {
    dataPosts: [] | Post[]
    isLoading: boolean
    isError: boolean
};

export enum PostsActionTypes {
    GET_POSTS_BEGIN = 'test/posts/GET_POSTS_BEGIN',
    GET_POSTS_SUCCES = 'test/posts/GET_POSTS_SUCCES',
    ADD_POST = 'test/posts/ADD_POST',
    GET_POSTS_FAILURE = 'test/posts/GET_POSTS_FAILURE'
};

interface GetPostsBeginAction {
    type: PostsActionTypes.GET_POSTS_BEGIN
};
interface GetPostsSuccessAction {
    type: PostsActionTypes.GET_POSTS_SUCCES
    payload: Post[]
};
interface AddPostAction {
    type: PostsActionTypes.ADD_POST,
    payload: Post;
};
interface GetPostsFailurenAction {
    type: PostsActionTypes.GET_POSTS_FAILURE,
};

export type PostsAction =
    GetPostsBeginAction
    | GetPostsSuccessAction
    | AddPostAction
    | GetPostsFailurenAction
