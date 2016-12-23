import React, {Component} from 'react'
import {View, Text} from 'react-native'
// import {observer} from 'mobx-react/native';
import styles from './styles';

export default class TestComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>This is the TestComponent!!</Text>
      </View>
    )
  }
}