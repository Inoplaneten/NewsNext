import { BaseThunkType, InferActionsTypes } from '../store';
import { requestPosts } from './postsReducer';

const initialState = {
    initialized: false
};

const appInitialized = (state = initialState, action: ActionsTypes): InitialState => {
    switch(action.type) {
        case 'test/posts/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }           
        default:
            return state;    
    }
};

const actionsAppInitialized = {
    initializedSuccess: () => ({type: 'test/posts/INITIALIZED_SUCCESS'} as const),
}

export const initializeApp = (): ThunkType => async (dispatch) => {
    let promiseGetPosts = dispatch(requestPosts());

    await Promise.all([promiseGetPosts]);

    try {
        dispatch(actionsAppInitialized.initializedSuccess());
    } catch (error){

    }
};

export { appInitialized };

type InitialState = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actionsAppInitialized>;
type ThunkType = BaseThunkType<ActionsTypes>;