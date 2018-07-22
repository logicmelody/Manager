import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  constructor(props) {
    super(props);

    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyDDmWzr6IYBKx-B6i7Lh7_RuOrP1QibPqA',
      authDomain: 'manager-ba400.firebaseapp.com',
      databaseURL: 'https://manager-ba400.firebaseio.com',
      projectId: 'manager-ba400',
      storageBucket: 'manager-ba400.appspot.com',
      messagingSenderId: '996367866456'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, ReduxLogger));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
