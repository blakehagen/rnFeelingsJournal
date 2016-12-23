'use strict';
const React = require('react-native');

const styles = React.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    resizeMode: 'stretch',
    width: undefined,
    height: undefined,
    paddingLeft: 50,
    paddingRight: 50
  },

  title: {
    fontSize: 32,
    marginTop: 100,
    marginBottom: -4,
    // fontFamily: 'AppleSDGothicNeo-UltraLight',
    fontFamily: 'AppleSDGothicNeo-Thin',
    color: '#45AB7F'
  },

  entryButton: {
    height: 40,
    alignSelf: 'stretch',
    backgroundColor: '#45AB7F',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  entryButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'AppleSDGothicNeo-UltraLight'
  }
});

module.exports = styles;