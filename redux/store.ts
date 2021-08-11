import { Action, AnyAction, applyMiddleware, createStore, Store } from 'redux';
import { createWrapper, Context, MakeStore} from 'next-redux-wrapper';
import { reducer, RootState } from './reducers';
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk';

// create a makeStore function
const makeStore: MakeStore<Store<RootState>> = (context: Context) => createStore(reducer, applyMiddleware(thunkMiddleware));

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never

export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

export type BaseThunkType<A extends Action = Action, R = Promise<any>> = ThunkAction<R, RootState, unknown, A>

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>