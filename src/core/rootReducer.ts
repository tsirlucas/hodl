import {combineReducers, Reducer} from 'redux';
import {DeepReadonly} from 'utility-types';

import {person} from './person/person.reducer';

const rootReducerObj = {person};

type RootType = typeof rootReducerObj;
type UnboxReducer<T> = T extends Reducer<infer U> ? U : T;

// State should be readonly
export type RootState = DeepReadonly<{[P in keyof RootType]: UnboxReducer<RootType[P]>}>;

export const rootReducer = combineReducers<RootState>(rootReducerObj);
