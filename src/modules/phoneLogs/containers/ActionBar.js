import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ActionBar extends Component {
  render() {
    return (
      <View style={{ height: 40, backgroundColor: '#C4C7CC' }}>
        <Text style={{
          textAlign: 'center', color: '#000', marginTop: 12, fontSize: 11,
        }}>Updated Now</Text>
      </View>
    );
  }
}

export default ActionBar;
