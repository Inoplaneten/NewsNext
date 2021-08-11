import { postsAPI } from "../../api/api-posts";
import { Post } from "../../types/postsType";
import { BaseThunkType, InferActionsTypes } from "../store";

const initialState = {
    dataPosts: [] as [] | Post[],
    isLoading: false,
    isError: false
};

export const posts = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case 'test/posts/GET_POSTS_BEGIN':
            return {
                ...state,
                isLoading: true,
            }
        case 'test/posts/GET_POSTS_SUCCES':
            return {
                ...state,
                dataPosts: action.payload,
                isLoading: false,
            }
        case 'test/posts/ADD_POST':
            return {
                ...state,
                dataPosts: [
                    ...state.dataPosts,
                    action.payload
                ]
            }
        case 'test/posts/GET_POSTS_FAILURE':
            return {
                ...state,
                isError: true
            }
        default:
            return state
    }
};

export const actionsPosts = {
    setPostsBegin: () => ({ type: 'test/posts/GET_POSTS_BEGIN' } as const),
    setPostsSuccess: (data: Post[]) => ({ type: 'test/posts/GET_POSTS_SUCCES', payload: data } as const),
    setPostsFailure: () => ({ type: 'test/posts/GET_POSTS_FAILURE' } as const),
    setAddPost: (data: Post) => ({ type: 'test/posts/ADD_POST', payload: data } as const),
};

export const requestPosts = (): ThunkType => async (dispatch) => {
    dispatch(actionsPosts.setPostsBegin());

    const response = await postsAPI.getPosts();

    try {
        dispatch(actionsPosts.setPostsSuccess(response.data));

    } catch (error) {
        dispatch(actionsPosts.setPostsFailure());
    }
};

type InitialState = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actionsPosts>;
type ThunkType = BaseThunkType<ActionsTypes>;