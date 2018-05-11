import {createAction} from 'redux-act';

import {Person} from 'models';

export const actions = {
  subscribe: createAction('person/SUBSCRIBE'),
  unsubscribe: createAction('person/UNSUBSCRIBE'),
  socketError: createAction('person/SOCKET_ERROR'),
  setPersons: createAction<Person[]>('person/SET_PERSON'),
};

type ActionsType = typeof actions;
export type Actions = {[P in keyof ActionsType]: ReturnType<ActionsType[P]>};
