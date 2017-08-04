import React, { Component } from 'react';
import { Alert, Button, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

class MainApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
            joint:'s'
        }
  }


  _onPress_up = () =>  {
    fetch('http://10.76.124.87:5002/up?'+this.state.joint).done();
    console.log('up');
  }

  _onPress_down = () =>  {
    fetch('http://10.76.124.87:5002/down?'+this.state.joint).done();
    console.log('down');
  }

  _onPress_right = () =>  {
    fetch('http://10.76.124.87:5002/right?w').done();
    console.log('right');
  }

  _onPress_left = () =>  {
    fetch('http://10.76.124.87:5002/left?w').done();
    console.log('left');
  }
  _onPress_open = () =>  {
    fetch('http://10.76.124.87:5002/open').done();
    console.log('right');
  }

  _onPress_close = () =>  {
    fetch('http://10.76.124.87:5002/close').done();
    console.log('left');
  }

  _onPress_shoulder = () => {
    this.setState({
              joint: 's'
          })
  }
  _onPress_elbow = () => {
    this.setState({
              joint: 'e'
          })
  }
  _onPress_wrist = () => {
    this.setState({
              joint: 'u'
          })
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <View style={styles.containerButton}>
              <TouchableHighlight onPress={this._onPress_up} style={styles.button}>
                <Text style={styles.buttonText}>U</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.lateral}>


                <TouchableHighlight onPress={this._onPress_right} style={styles.buttonLateral}>
                  <Text style={styles.buttonText}>L</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this._onPress_left} style={styles.buttonLateral}>
                  <Text style={styles.buttonText}>R</Text>
                </TouchableHighlight>


            </View>

            <View style={styles.containerButton}>
              <TouchableHighlight onPress={this._onPress_down} style={styles.button}>
                <Text style={styles.buttonText}>D</Text>
              </TouchableHighlight>
            </View>

        </View>
        <View style={styles.lateralGripper}>


            <TouchableHighlight onPress={this._onPress_open} style={styles.buttonLateral}>
              <Text style={styles.buttonText}>O</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={this._onPress_close} style={styles.buttonLateral}>
              <Text style={styles.buttonText}>C</Text>
            </TouchableHighlight>


        </View>
        <View style={styles.jointsContainer}>

            <TouchableHighlight onPress={this._onPress_shoulder} style={styles.buttonJoints}>
              <Text style={styles.buttonTextJoint}>Hombro</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={this._onPress_elbow} style={styles.buttonJoints}>
              <Text style={styles.buttonTextJoint}>Codo</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={this._onPress_wrist} style={styles.buttonJoints}>
              <Text style={styles.buttonTextJoint}>Muñeca</Text>
            </TouchableHighlight>

        </View>
        <Text >{this.state.joint}</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    justifyContent:'center'
  },
  buttonContainer: {
    padding: 15,
    shadowRadius: 10,
    padding: 10,
  },
  center:{
    display: 'flex',
    justifyContent: 'center'
  },
  lateralGripper:{
    display: 'flex',
    flex: 1,
    paddingTop:30,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:"space-around"
  },
  lateral:{
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:"space-between"
  },
  containerButton: {
  paddingTop: 30,
  alignItems: 'center'
  },
  buttonLateral: {
    width: 90,
    alignItems: 'center',
    backgroundColor: '#2196F0',
    borderRadius:15,
  },

  jointsContainer:{
    padding:20,
    display: 'flex',
    paddingTop:80,
    paddingLeft:110,
    flexDirection: 'column',
    justifyContent:'space-between'

  },

  buttonJoints: {
    width: 150,
    alignItems: 'center',
    backgroundColor: '#666',
    borderRadius:30,
  },
  buttonTextJoint: {
    padding: 20,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },

  button: {
    margin:5,
    marginBottom: 30,
    width: 90,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius:15
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  }
})

AppRegistry.registerComponent('robot', () => MainApp);
