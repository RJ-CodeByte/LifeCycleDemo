import { Text, StyleSheet, View, Button, TouchableOpacity, BackHandler } from 'react-native'
import React, { Component } from 'react'
import styles from './styles';
export default class App extends Component {

  constructor() {
    super()
    this.state = {
      data: 5
    }
    console.log("constructor");
  }

  componentDidMount() {
    console.log("ComponentDidMount is called");
  }
  componentDidUpdate() {
    console.log("ComponentDidUpdate is Called");
  }
  // componentWillUnmount() {
  //   console.log("ComponentWillUnmount is called")
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("shouldComponentUpdate.....", nextState.data);
  //   console.log("shouldComponentUpdate1.....", this.state.data);
  //   if (this.state.data != nextState.data)
  //     return true;
  //   else
  //     return false;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Snapshot.....", prevState);
    console.log("Snapshot.....", prevProps);
  }



  render() {
    console.log("Rendring occur")
    return (
      <View style={styles.body}>
        <TouchableOpacity style={{ justifyContent: 'space-between' }} onPress={() => {
          BackHandler.exitApp();
        }} ><Text>Back</Text></TouchableOpacity>
        <Text style={styles.text}>{this.state.data}</Text>
        <Button title='Update Me' onPress={() => { this.setState({ data: 6 }) }} />
      </View>
    )
  }
}

