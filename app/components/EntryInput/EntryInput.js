import React, {Component} from 'react'
import {View, Text, TextInput, TouchableHighlight, Image} from 'react-native'
// import {observer} from 'mobx-react/native';
import styles from './styles';

export default class EntryInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextInput
        style={styles.inputBox}
        secureTextEntry={this.props.secureTextEntry}
        placeholder={this.props.placeholder}
      />
    )
  }
}