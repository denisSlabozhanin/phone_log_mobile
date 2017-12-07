import React, { Component } from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';

/* TODO: This is just a mockup to test functionality */
class Login extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('Phonelogs'); }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 5 }} />
          <View style={{ flex: 6 }}>
            <Text style={{ color: '#333', textAlign: 'center' }}>
              LOGIN
            </Text>
            <Text style={{ color: '#999', textAlign: 'center', fontSize: 11 }}>
              {`Click somewhere on a page\nto redirect.`}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Login;
