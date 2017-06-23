import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Expo, { Font } from 'expo';
import { Spinner } from './src/components/common/Spinner';
import reducers from './src/reducers';
import Router from './src/Router';

export default class App extends Component {
  state = {
   fontLoaded: false,
  };
  async componentDidMount() {
   await Font.loadAsync({
     'open-sans-bold': require('./src/components/fonts/OpenSans-Bold.ttf'),
     'open-sans-extrabold': require('./src/components/fonts/OpenSans-ExtraBold.ttf'),
     'open-sans-light': require('./src/components/fonts/OpenSans-Light.ttf'),
     'open-sans-regular': require('./src/components/fonts/OpenSans-Regular.ttf'),
   });

   this.setState({ fontLoaded: true });
 }
  componentWillMount() {
    this.initFirebase();
    this.initAnalytics();
  }

  initFirebase() {
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

  initAnalytics() {
    const segmentWriteKey = '5JfEuoeh4ZJNQ6i6676CcfMt5UvtGBDj';
    Expo.Segment.initializeAndroid(segmentWriteKey);
    Expo.Segment.initializeIOS(segmentWriteKey);
    Expo.Segment.track('Tela login');
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    if (this.state.fontLoaded) {
    return (
        <Provider store={store}>
          <Router />
        </Provider>
      );
    }
    return (
        <Spinner size="large" />
    );
  }
}
