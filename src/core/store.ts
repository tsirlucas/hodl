import {applyMiddleware, createStore} from 'redux';
import {createEpicMiddleware} from 'redux-observable';

import {rootEpic} from './rootEpic';
import {rootReducer, RootState} from './rootReducer';

const epicMiddleware = createEpicMiddleware(rootEpic);
export const store = createStore<RootState>(rootReducer, applyMiddleware(epicMiddleware));
