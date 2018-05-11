import {combineReducers} from 'redux';
import {createReducer} from 'redux-act';

import {Person} from 'models';

import {actions} from './person.actions';

export const initialState = {
  data: null as Person[],
};

const data = createReducer({}, initialState.data).on(
  actions.setPersons,
  (_state, payload) => payload,
);

export type PersonState = typeof initialState;
export const person = combineReducers<PersonState>({
  data,
});
