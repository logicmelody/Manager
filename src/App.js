import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
