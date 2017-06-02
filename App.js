import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import Router from './src/Router';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA5MRCidrQnDwtgqWKNQoPcvRcQCTGOtsU',
      authDomain: 'guardoc-2960e.firebaseapp.com',
      databaseURL: 'https://guardoc-2960e.firebaseio.com',
      projectId: 'guardoc-2960e',
      storageBucket: 'guardoc-2960e.appspot.com',
      messagingSenderId: '1079221930643'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
