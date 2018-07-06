import React, { Component, Fragment } from 'react'
import { StyleSheet, Text, View, Button, Animated, Easing } from 'react-native'

import * as Animatable from 'react-native-animatable'

export default class AnimationScreen extends Component {

  state = {
    xPosition: new Animated.Value(-400),
    finished: false
  }

  onEnd = (endState) => {
    if (endState.finished) {
      this.setState({finished:true})
    }
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <Fragment>
        <Animatable.View 
          animation='fadeOutLeftBig'
          delay={9000}
          style={styles.container}
        >
        <View style={styles.box}>
          <View style={styles.columnBox}>
            <Animatable.View
              key='Image 1'
              animation='fadeInDownBig'
              delay={1000}
              style={[styles.button1, {backgroundColor: 'pink'}]}
            >
              <Text style={styles.text}>Image 1</Text>
            </Animatable.View>
            <Animatable.View
              key='Image 2'
              animation='fadeInLeftBig'
              delay={2500}
              style={[styles.button2, {backgroundColor: 'orange'}]}
            >
              <Text style={styles.text}>Image 2</Text>
            </Animatable.View>
          </View>
          <Animatable.View
            key='Image 3'
            animation='fadeInRightBig'
            delay={4000}
            style={[styles.button3, {backgroundColor: 'green'}]}
            onAnimationEnd={this.onEnd}
          >
          {this.state.finished === true && <Animatable.Image 
            animation='fadeInLeftBig'
            delay={1000}
            source={{ uri: 'http://pngimg.com/uploads/elephants/elephants_PNG18808.png' }}
            style={[styles.image]}
           />}
          </Animatable.View>
        </View>
        </Animatable.View>
        <Button
            title="Go to the gesture party"
            onPress={() =>
              navigate('Gesture')
            }
          />
        </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
    box: {
    flexDirection: 'row'
  },
    columnBox: {
    width: '50%',
  },
  button1: {
    height: '50%',
    margin: 10
  },
  button2: {
    height: '50%',
    margin: 10,
  },
  button3: {
    overflow: 'hidden',
    height: '100%',
    margin: 10,
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  image: {
    height: '100%',
  }
})