import React, { Component } from 'react';
import { View, Image, Button, Text } from 'react-native';

export default class InstructionsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'How to Play'
    // tabBarIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./notif-icon.png')}
    //     style={[styles.icon, { tintColor: tintColor }]}
    //   />
    // )
  };

  render() {
    return (
      <View>
        <Text>Here are some instructions on how to play my Jesus game</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
    );
  }
}
