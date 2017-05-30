import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import DocumentList from './components/DocumentList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene key="home" component={DocumentList} title="Lista de documentos" initial={true} />
    </Router>
  );
};

export default RouterComponent;
