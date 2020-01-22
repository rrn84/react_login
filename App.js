import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Splash from './splash';
import Login from './scr/componets/Login/Login'

export default class GithubApp extends Component{
  render()
  {
    return (
      <Login />
    );
  }
}
