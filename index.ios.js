import React, { Component } from 'react';
import { StyleSheet, View, Button, Alert, AppRegistry } from 'react-native';

class MainApp extends Component {

  constructor(props) {
    super(props);
  }

_onPress_up() {
  fetch('http://10.76.124.87:5002/up').done();
}

_onPress_down() {
  fetch('http://10.76.124.87:5002/down').done();
}

_onPress_right() {
  fetch('http://10.76.124.87:5002/right').done();
}

_onPress_left() {
  fetch('http://10.76.124.87:5002/left').done();
}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPress_up} title="up" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
          <Button onPress={this._onPress_down} title="down" color="#EEE" accessibilityLabel="Tap on Me"/>
          <Button onPress={this._onPress_right} title="right" color="#DDD" accessibilityLabel="Tap on Me"/>
          <Button onPress={this._onPress_left} title="left" color="#CCC" accessibilityLabel="Tap on Me"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
})

AppRegistry.registerComponent('robot', () => MainApp);
