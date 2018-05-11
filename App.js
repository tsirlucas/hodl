import React from 'react';
import {Home} from 'views';
import {Layout} from 'components';

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <Home />
      </Layout>
    );
  }
}
