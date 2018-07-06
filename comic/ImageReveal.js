import React, { Component, Fragment } from 'react'
import { StyleSheet, Text, Animated, Easing, Image, TouchableHighlight } from 'react-native'
import { Curtain, CurtainWrapper } from './ImageReveal.styles.js'

const AnimatedTouchableHighlight = Animated.createAnimatedComponent(TouchableHighlight)

export default class ImageReveal extends Component {
  static navigationOptions = {
    title: 'Image Reveal',
  }

  state = {
    xPositionLeft: new Animated.Value(-10),
    xPositionRight: new Animated.Value(200),
    opacity: new Animated.Value(0)
  }

  componentDidMount() {
    this.startAnimation()
  }

  startAnimation = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.xPositionLeft, {
          delay: 1000,
          toValue: -100,
          easing: Easing.back(),
          duration: 4000,
        }),
        Animated.timing(this.state.xPositionRight, {
          delay: 1000,
          toValue: 290,
          easing: Easing.back(),
          duration: 4000,
        })
      ]),
      Animated.timing(this.state.opacity, {
        delay: 1000,
        toValue: 1,
        duration: 1000,
      })
    ]).start()
  }

  handleOnPress = () => {
    const { navigate } = this.props.navigation
    navigate('Interpolation')
  }

  render() {
    return (
      <Fragment>
        <Curtain class="curtain">
          <CurtainWrapper class="curtain__wrapper">
            <Animated.View
              style={[styles.left, { left: this.state.xPositionLeft} ]}
            />
            <Image 
              source={{uri: 'https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/2016/10/IMG_0741-706x456.jpg'}}
              style={styles.image} />
            <Animated.View
              style={[styles.right, { left: this.state.xPositionRight} ]}
            />
          </CurtainWrapper>
        </Curtain>
        <AnimatedTouchableHighlight onPress={this.handleOnPress} style={{opacity: this.state.opacity}}>
          <Text>Click me</Text>
        </AnimatedTouchableHighlight>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  left: {
    backgroundColor: 'darkred',
    width: '50%',
    height: '100%',
    position: 'relative',
    zIndex: 2
  },
  right: {
    backgroundColor: 'darkred',
    width: '50%',
    height: '100%',
    position: 'relative',
    zIndex: 2,
    top: '-100%',
    left: '50%'
  },
  image: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 12,
  }
})