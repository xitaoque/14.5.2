'use strict';
var React = require('react-native');
let PixelRatio = require('PixelRatio');
let pixelRatio = PixelRatio.get();

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} = React;
var base64Icon = 'data:image/jpg;base64,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';
var Project19 = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image style={styles.base64}
          source={{uri: base64Icon, scale: 3}} />
      </View>
    );
  }
});
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  base64: {
    width:221/pixelRatio,
    height:221/pixelRatio
  }
});
AppRegistry.registerComponent('Project19', () => Project19);
