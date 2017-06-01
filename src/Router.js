import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import DocumentList from './components/DocumentList';
import DocumentCreate from './components/DocumentCreate';
import DocumentEdit from './components/DocumentEdit';
import LoginAuto from './components/LoginAuto';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="auth">
      <Scene
        key="login"
        component={LoginAuto}
        title="Logar"
        hideNavBar={true} 
      />
    </Scene>
      <Scene key="main">
        <Scene
          onRight={() => Actions.documentCreate()}
          rightTitle="Add"
          key="documentList"
          component={DocumentList}
          title="Meus documentos"
          init
        />
        <Scene key="documentCreate" component={DocumentCreate} title="Adicionar documento" />
        <Scene key="documentEdit" component={DocumentEdit} title="Atualizar documento" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
