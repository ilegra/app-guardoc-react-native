import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Expo from 'expo';
import DocumentList from './components/DocumentList';
import DocumentCreate from './components/DocumentCreate';
import DocumentEdit from './components/DocumentEdit';
import LoginAuto from './components/LoginAuto';
import LoginForm from './components/LoginForm';
import CreateAccountForm from './components/CreateAccountForm';

const RouterComponent = () => {
  return (
    <Router
      navigationBarStyle={styles.navBar}
      titleStyle={styles.navTitle}
      sceneStyle={{ paddingTop: 70, backgroundColor: '#f2f2f2' }}
    >
      <Scene key="auth">
        <Scene
          key="login"
          component={LoginForm}
          title="Logar"
          hideNavBar={true}
        />
        <Scene
          key="createAccount"
          component={CreateAccountForm}
          title="Criar conta"
          leftButtonIconStyle={styles.leftButtonIcon}
          hideNavBar={false}
        />
      </Scene>
      <Scene key="main">
        <Scene
          key="documentList"
          component={DocumentList}
          title="Lista"
          onRight={() => adicionarDocumento()}
          rightButtonIconStyle={styles.rightButton}
          rightButtonImage={require('./components/img/adicionar.png')}
          type="reset"
        />
        <Scene
          key="documentCreate"
          component={DocumentCreate}
          title="Novo"
          leftButtonIconStyle={styles.leftButtonIcon}
          leftButtonStyle={styles.leftButton}
        />
        <Scene
          key="documentEdit"
          component={DocumentEdit}
          title="Atualizar"
          leftButtonIconStyle={styles.leftButtonIcon}
          leftButtonStyle={styles.leftButton}
        />
      </Scene>
    </Router>
  );
};

const adicionarDocumento = () => {
   Actions.documentCreate();
   Expo.Segment.track('Action adicionar documento');
};


const styles = {
  navBar: {
   flex: 2,
   backgroundColor: '#b8d329',
   height: 70,
   borderWidth: 0,
   paddingTop: 10
 },
 navTitle: {
   color: 'white',
   fontFamily: 'open-sans-bold',
   fontSize: 22
 },
 leftButtonIcon: {
     tintColor: 'white'
 },
 leftButton: {
   paddingTop: 10
 },
 rightButton: {
   marginRight: 5,
   width: 30,
   height: 30
 },
 onRight: {
   tintColor: 'green'
 }

};

export default RouterComponent;
