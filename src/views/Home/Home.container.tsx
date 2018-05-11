import React from 'react';
import {Person} from 'models';
import {PersonService} from 'services';

import {HomePresentational} from './Home.presentational';

export type HomeState = {persons: Person[]};
export class Home extends React.Component<{}, HomeState> {
  unsubscribe: Function;

  state = {
    persons: null as Person[],
  };

  componentDidMount() {
    this.unsubscribe = PersonService.getInstance().subscribeToPersons((persons) => {
      this.setState(() => ({persons: persons}));
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return <HomePresentational persons={this.state.persons} />;
  }
}
