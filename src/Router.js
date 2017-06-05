import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import DocumentList from './components/DocumentList';
import DocumentCreate from './components/DocumentCreate';
import DocumentEdit from './components/DocumentEdit';
import LoginAuto from './components/LoginAuto';

const RouterComponent = () => {
  return (
    <Router
      navigationBarStyle={styles.navBar}
      titleStyle={styles.navTitle}
      sceneStyle={{ paddingTop: 90 }}
    >
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
          key="documentList"
          component={DocumentList}
          title="Meus documentos"
          rightTitle="Add"
          rightButtonTitleStyle={{ tintColor: 'red' }}
          rightButtonImage={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
          onRight={() => Actions.documentCreate()}
        />
        <Scene
          key="documentCreate"
          component={DocumentCreate}
          title="Adicionar documento"
          leftButtonIconStyle={styles.leftButtonIcon}
          leftButtonStyle={styles.leftButton}
        />
        <Scene key="documentEdit" component={DocumentEdit} title="Atualizar documento" />
      </Scene>
    </Router>
  );
};


const styles = {
  navBar: {
   flex: 2,
   backgroundColor: '#b8d329',
   height: 80,
   borderWidth: 0
 },
 navTitle: {
   color: 'white',
   paddingTop: 30,
   fontWeight: 'bold'
 },
 leftButtonIcon: {
     tintColor: 'white'
 },
 leftButton: {
   paddingTop: 10
 },
 onRight: {
   tintColor: 'green'
 }

};

export default RouterComponent;
