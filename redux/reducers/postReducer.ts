import { postsAPI } from "../../api/api-posts";
import { Comment, Post } from "../../types/postsType";
import { BaseThunkType, InferActionsTypes } from "../store";

const initialState = {
    dataPost: {
        id: null,
        title: null,
        body: null,
        comments: [] as Comment[]
    } as Post,
    isLoading: true,
    isError: false
};

export const post = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case 'test/posts/GET_PRODUCT_BEGIN':
            return {
                ...state,
                isLoading: true,
            }
        case 'test/posts/GET_PRODUCT_SUCCES':
            return {
                ...state,
                dataPost: action.payload,
            }
        case 'test/posts/ADD_COMMENT_OF_POST':
            return {
                ...state,
                dataPost: {
                    ...state.dataPost,
                    comments: [
                        ...state.dataPost.comments,
                        action.payload
                    ]
                }
            }
        case 'test/posts/GET_PRODUCT_FAILURE':
            return {
                ...state,
                isError: true
            }
        default:
            return state
    }
};

export const actionsPost = {
    setPostBegin: () => ({ type: 'test/posts/GET_PRODUCT_BEGIN' } as const),
    setPostSuccess: (data: Post) => ({ type: 'test/posts/GET_PRODUCT_SUCCES', payload: data } as const),
    setPostFailure: () => ({ type: 'test/posts/GET_PRODUCT_FAILURE' } as const),
    setAddCommentOfPost: (data: Comment) => ({ type: 'test/posts/ADD_COMMENT_OF_POST', payload: data } as const),
};

export const requestPost = (id: string | string[]): ThunkType => async (dispatch) => {
    dispatch(actionsPost.setPostBegin())

    const response = await postsAPI.getPost(id);

    try {
        dispatch(actionsPost.setPostSuccess(response.data));

    } catch (error) {
        dispatch(actionsPost.setPostFailure());
    }
};

type InitialState = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actionsPost>;
type ThunkType = BaseThunkType<ActionsTypes>;