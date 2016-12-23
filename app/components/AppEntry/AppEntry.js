import React, {Component} from 'react'
import {View, Text, TextInput, TouchableHighlight, TouchableOpacity, Image} from 'react-native'
// import {observer} from 'mobx-react/native';
import styles from './styles';
import EntryInput from '../EntryInput/EntryInput';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('this.props.navigator --> ', this.props.navigator);

    return (
      <Image
        style={styles.container}
        source={require('./images/mainBackground.jpg')}>
        <Text style={styles.title}>Feelings Journal</Text>
        <EntryInput placeholder="Email"
                    secureTextEntry={false}/>
        <EntryInput placeholder="Password" secureTextEntry={true}/>

        <TouchableOpacity style={styles.entryButton} onPress={this.navigationTest.bind(this)}>
          <Text style={styles.entryButtonText}>Login</Text>
        </TouchableOpacity>

      </Image>
    )
  }

  navigationTest() {
    console.log('nav test');
    this.props.navigator.push({
      component: 'TestComponent'
    })
  }
}