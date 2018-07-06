import React, { Component } from 'react'
import { View, Button, Animated } from 'react-native'

export default class Interpolation extends Component {
  static navigationOptions = {
    title: 'Interpolation',
  }

  constructor(props) {
    super(props)

    this.state = {}
    this.state.left = new Animated.Value(0)
    this.state.top = this.state.left
    this.state.scale = this.state.left.interpolate({
      inputRange: [0, 100, 200],
      outputRange: [1, 4, 2],
    })
  }
  
  componentDidMount() {
    Animated.spring(this.state.left, { toValue: 200 }).start()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Animated.View style={{
          left: this.state.left,
          top: this.state.top,
          transform:[{ scale: this.state.scale }],
          height: 100,
          width: 100,
          backgroundColor: 'palevioletred'}}
        />
      </View>
    )
  }
}