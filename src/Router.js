import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import DocumentList from './components/DocumentList';
import DocumentCreate from './components/DocumentCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          onRight={() => Actions.documentCreate()}
          rightTitle="Add"
          key="documentList"
          component={DocumentList}
          title="Meus documentos"
          initial
        />
        <Scene key="documentCreate" component={DocumentCreate} title="Adicionar documento" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
