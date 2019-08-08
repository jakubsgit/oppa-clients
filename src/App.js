import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import ClientsMaker from './containers/ClientsMaker/ClientsMaker';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <ClientsMaker />
        </Layout>
      </div>
    )
  }
}

export default App;
