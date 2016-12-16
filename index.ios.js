
import React, { Component } from 'react';
import {AppRegistry, Navigator} from 'react-native';
import App from './app/components/AppEntry/AppEntry';


class rnFeelingsJournal extends Component {
  renderScene (route, navigator) {
    return <route.component {...route.passProps} navigator={navigator} />
  }
  configureScene (route, routeStack) {
    if (route.type === 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom
    }
    return Navigator.SceneConfigs.PushFromRight
  }
  render () {
    return (
      <Navigator
        configureScene={this.configureScene.bind(this)}
        renderScene={this.renderScene.bind(this)}
        initialRoute={{
          component: App
        }} />
    )
  }
}

AppRegistry.registerComponent('rnFeelingsJournal', () => rnFeelingsJournal);