import React, {Component} from 'react';
import {AppRegistry, Navigator} from 'react-native';
import App from './app/components/AppEntry/AppEntry';
import TestComponent from './app/components/TestComponent/TestComponent';


class rnFeelingsJournal extends Component {
  renderScene(route, navigator) {
    let globalNavigatorProps = {navigator};
    console.log('route.component--> ', route.component);

    switch (route.component) {
      case 'TestComponent':
        return (
          <TestComponent {...globalNavigatorProps} />
        );
      default:
        return (
          <App {...globalNavigatorProps}/>
        )
    }
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromLeft;
  }

  render() {
    return (
      <Navigator
        ref='appNavigator'
        configureScene={this.configureScene.bind(this)}
        renderScene={this.renderScene.bind(this)}
        initialRoute={{
          component: App
        }}/>
    )
  }
}

AppRegistry.registerComponent('rnFeelingsJournal', () => rnFeelingsJournal);


//     {/*return <route.component {...route.passProps} navigator={navigator} />*/}
