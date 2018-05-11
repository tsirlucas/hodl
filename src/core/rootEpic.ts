import {combineEpics} from 'redux-observable';

import {personEpic} from './person/person.epic';

export const rootEpic = combineEpics(personEpic);
