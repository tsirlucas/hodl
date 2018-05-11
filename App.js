import React from 'react';
import {Provider} from 'react-redux';

import {Layout} from 'components';
import {store} from 'core';
import {Home} from 'views';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Layout>
          <Home />
        </Layout>
      </Provider>
    );
  }
}
