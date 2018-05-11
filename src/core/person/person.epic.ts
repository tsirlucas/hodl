import {combineEpics, Epic} from 'redux-observable';
import {Observable} from 'rxjs';
import {$Values} from 'utility-types';

import {RootState} from 'core';
import {PersonService} from 'src/services';

import {actions, Actions} from './person.actions';

const personsSocket = PersonService.getInstance().getSocket();
const $personsDataObservable = Observable.fromEvent(personsSocket, 'data');

const onWSError = (err: Error) => {
  console.log('ws error: ', err);

  return Observable.of(actions.socketError());
};

const subscribePersonsEpic: Epic<$Values<Actions>, RootState> = (action$) =>
  action$.ofType(actions.subscribe.getType()).mergeMap(() =>
    $personsDataObservable
      .map(actions.setPersons)
      .takeUntil(action$.ofType(actions.unsubscribe.getType()))
      .catch(onWSError),
  );

export const personEpic = combineEpics(subscribePersonsEpic);
