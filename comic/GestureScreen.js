import React, { Component } from 'react'
import { StyleSheet, View, Text, PanResponder, Animated } from 'react-native'

export default class GestureScreen extends Component {
  static navigationOptions = {
    title: 'Drag and Drop',
  }

  state = {
    dragging: false,
    initialTop: 0,
    initialLeft: 0,
    offsetTop: 0,
    offsetLeft: 0,
    // spring: new Animated.ValueXY(),
    opacity: new Animated.Value(1)
  }

  panResponder = {}

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd,
    })
  }

  render() {
    const {dragging, initialTop, initialLeft, offsetTop, offsetLeft} = this.state

    // Update style with the state of the drag thus far
    const style = {
      top: initialTop + offsetTop,
      left: initialLeft + offsetLeft,
    }

    return (
      <Animated.View
        // Put all panHandlers into the View's props
        {...this.panResponder.panHandlers}
        style={[styles.square, style, { opacity: this.state.opacity }]}
      >
        <Text style={styles.text}>
          Drag me!
        </Text>
      </Animated.View>
    )
  }

  isDropArea = (gestureState) => {
    return gestureState.moveY < 200;
  }

  // Should we become active when the user presses down on the square?
  handleStartShouldSetPanResponder = (e, gestureState) => {
    return true
  }

  // We were granted responder status! Let's update the UI
  handlePanResponderGrant = (e, gestureState) => {
    this.setState({dragging: true})
  }

  // Every time the touch/mouse moves
  handlePanResponderMove = (e, gestureState) => {

    // Keep track of how far we've moved in total (dx and dy)
    this.setState({
      offsetTop: gestureState.dy,
      offsetLeft: gestureState.dx,
    })
  }

  // When the touch/mouse is lifted
  handlePanResponderEnd = (e, gestureState) => {
    const {initialTop, initialLeft} = this.state

    // if the drag is finished and we are in the Drop Area change the opacity
    if (this.isDropArea(gestureState)) {
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: 2000
      }).start(() =>
        this.setState({
          dragging: false
        })
      )
    } else {

      // The drag is finished. Set the initialTop and initialLeft so that
      // the new position sticks. Reset offsetTop and offsetLeft for the next drag.
      this.setState({
        dragging: false,
        initialTop: initialTop + gestureState.dy,
        initialLeft: initialLeft + gestureState.dx,
        offsetTop: 0,
        offsetLeft: 0,
      })

      // or set the position back to the initial ones
      // this removes need for handlePanResponderMove
      // this would also require set up of a new instance of Animated.Value
      // Animated.spring(this.state.spring, {
      //   toValue: { x: 150, y: 0 },
      //   friction: 5
      // }).start()
    }
  }
}

const styles = StyleSheet.create({
  square: {
    backgroundColor: 'pink',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12,
  }
})