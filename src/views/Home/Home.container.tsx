import React from 'react';
import {connect} from 'react-redux';
import {HomePresentational} from './Home.presentational';
import {
  mapDispatchToProps,
  MapDispatchToProps,
  mapStateToProps,
  MapStateToProps,
} from './Home.selectors';

export type HomeProps = MapStateToProps & MapDispatchToProps;

export class UnconnectedHome extends React.Component<HomeProps> {
  componentWillMount() {
    this.props.actions.personsSubscribe();
  }

  componentWillUnmount() {
    this.props.actions.personsUnsubscribe();
  }

  render() {
    return <HomePresentational persons={this.props.persons} />;
  }
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(UnconnectedHome);
