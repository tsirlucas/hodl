import {AnyAction, bindActionCreators, Dispatch} from 'redux';

import {actions} from 'core/person';
import {RootState} from 'core/rootReducer';

export const mapStateToProps = (state: RootState) => ({
  persons: state.person.data,
});

export const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  actions: bindActionCreators(
    {personsSubscribe: actions.subscribe, personsUnsubscribe: actions.unsubscribe},
    dispatch,
  ),
});

export type MapDispatchToProps = ReturnType<typeof mapDispatchToProps>;
export type MapStateToProps = ReturnType<typeof mapStateToProps>;
