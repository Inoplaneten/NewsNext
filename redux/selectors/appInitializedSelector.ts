import { RootState } from '../reducers';

export const getInitializedApp = (state: RootState) => state.appInitialized.initialized;