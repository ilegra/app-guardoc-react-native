import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import DocumentList from './src/components/DocumentList';
import DocumentCreate from './src/components/DocumentCreate';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="documentList"
            component={DocumentList}
            title="Meus documentos"
            initial={true}
          />
          <Scene key="documentCreate" component={DocumentCreate} title="Adicionar documento" />
        </Scene>
      </Router>
    );
  }
}
