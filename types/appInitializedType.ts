export interface AppInitializedState {
    initialized: boolean
};

export enum AppInitializedActionTypes {
    INITIALIZED_SUCCESS = 'test/posts/INITIALIZED_SUCCESS',
    INITIALIZED_FAILURE = 'test/posts/INITIALIZED_FAILURE'
};

interface InitializedSuccessAction {
    type: AppInitializedActionTypes.INITIALIZED_SUCCESS
};

interface InitializedFailureAction {
    type: AppInitializedActionTypes.INITIALIZED_FAILURE
};

export type AppInitializedAction =
    InitializedSuccessAction
    | InitializedFailureAction