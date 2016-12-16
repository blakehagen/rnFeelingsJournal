import React, {Component} from 'react'
import {View, Text, TextInput, TouchableHighlight, Image} from 'react-native'
// import {observer} from 'mobx-react/native';
import styles from './styles';
import EntryInput from '../EntryInput/EntryInput';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Image
        style={styles.container}
        source={require('./images/mainBackground.jpg')}>
        <Text style={styles.title}>Feelings Journal</Text>
        <EntryInput placeholder="Email"
                    secureTextEntry={false}/>
        <EntryInput placeholder="Password" secureTextEntry={true}/>

        <View style={styles.entryButton}>
          <Text style={styles.entryButtonText}>Login</Text>
        </View>

      </Image>
    )
  }
}