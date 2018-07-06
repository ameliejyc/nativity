import React, { Component, Fragment } from 'react'
import {
  StyleSheet,
  Animated,
  PanResponder,
  ImageBackground,
  View,
  Easing
} from 'react-native'

import * as Animatable from 'react-native-animatable'

const AnimatableImageBackground = Animatable.createAnimatableComponent(
  ImageBackground
)

Animatable.initializeRegistryWithDefinitions({
  scaleUp: {
    from: { scale: 1 },
    to: { scale: 1.4 }
  }
})

const tiles = {
  one: {
    key: 'tileOne',
    background: './assets/enter.jpg',
    animation: 'scaleUp',
    duration: 3000,
    delay: 1000,
    text: 'It was dark in the Night Zoo...',
    textAnimation: 'fadeInUp'
  },
  two: {
    key: 'tileTwo',
    background: './assets/enter.jpg',
    animation: 'fadeInLeftBig',
    duration: 0,
    delay: 0,
    text: 'when all of a sudden, Honey appeared',
    textAnimation: 'fadeInUp',
    textDelay: 2000
  }
}

export default class Tappable extends Component {

  state = {
    tilesToDisplay: 1,
    renderFirstTileText: false,
    renderSecondTileText: false,
    renderThirdTileAnimal: false,
    slideFinished: false,
    yPositionTop: new Animated.Value(0),
  }

  panResponder = {}

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onPanResponderGrant: this.handlePanResponderGrant
    })
  }

  handleStartShouldSetPanResponder = e => {
    return true
  }

  handlePanResponderGrant = e => {
    const { navigate} = this.props.navigation
    switch (this.state.tilesToDisplay) {
      case 1:
        return this.setState({ tilesToDisplay: ++this.state.tilesToDisplay })
      case 2:
        return this.setState({ tilesToDisplay: ++this.state.tilesToDisplay })
      case 3:
        this.setState({ slideFinished: true })
        return navigate('Tappable')
    }
  }

  showFirstTile() {
    return (
      <Fragment>
        <AnimatableImageBackground
          key={tiles.one.tileOne}
          animation={tiles.one.animation}
          duration={tiles.one.duration}
          delay={tiles.one.delay}
          style={styles.button1}
          source={require('./assets/enter.jpg')}
          onAnimationEnd={this.onFirstTileDisplayed}
        />
        {this.state.renderFirstTileText === true && (
          <Animatable.Text
            animation={tiles.one.textAnimation}
            style={styles.text1}
          >
            {tiles.one.text}
          </Animatable.Text>
        )}
      </Fragment>
    )
  }

  onFirstTileDisplayed = endState => {
    if (endState.finished) {
      this.setState({ renderFirstTileText: true })
    }
  }

  showSecondTile() {
    return (
      <AnimatableImageBackground
        key={tiles.two.tileTwo}
        animation={tiles.two.animation}
        delay={tiles.two.delay}
        style={styles.buttoncontainer}
        onAnimationEnd={this.onSecondTileDisplayed}
      >
      <Animated.Image 
        source={require('./assets/stars.jpg')}
        style={[styles.button2, { top: this.state.yPositionTop}]}
      />
        {this.state.renderSecondTileText === true && (
          <Animatable.Text
            animation={tiles.two.textAnimation}
            delay={tiles.two.textDelay}
            style={styles.text2}
          >
            {tiles.two.text}
          </Animatable.Text>
        )}
      </AnimatableImageBackground>
    )
  }

  onSecondTileDisplayed = endState => {
    if (endState.finished) {
      Animated.timing(this.state.yPositionTop, {
        toValue: -100,
        duration: 3000,
      }).start()
      this.setState({ renderSecondTileText: true })
    }
  }

  handleAnimalRef = ref => (this.animal = ref)

  animalAnimation = () => {
    return this.animal
      .bounce(1800)
      .then(() => this.animal.jello(1000))
      .then(() => this.animal.bounceOut(1000))
      .then(endState => console.log('animation finished'))
  }

  showThirdTile() {
    return (
      <AnimatableImageBackground
        source={require('./assets/stars.jpg')}
        key="Image 3"
        animation="fadeInRightBig"
        style={styles.button3}
        onAnimationEnd={this.onThirdTileDisplayed}
      >
        {this.state.renderThirdTileAnimal === true && (
          <Animatable.Image
            ref={this.handleAnimalRef}
            animation="zoomInLeft"
            delay={500}
            source={require('./assets/honey.png')}
            style={[styles.image]}
            onAnimationEnd={this.onAnimalDisplayed}
          />
        )}
      </AnimatableImageBackground>
    )
  }

  onThirdTileDisplayed = endState => {
    if (endState.finished) {
      this.setState({ renderThirdTileAnimal: true })
    }
  }

  onAnimalDisplayed = endState => {
    if (endState.finished) {
      this.animalAnimation()
    }
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={styles.container}
      >
        <View style={styles.box}>
          <View style={styles.columnBox}>
            <Animatable.View
              style={styles.buttoncontainer}
              animation="fadeInUp"
            >
              {this.showFirstTile()}
            </Animatable.View>
            {this.state.tilesToDisplay >= 2 && this.showSecondTile()}
          </View>
          {this.state.tilesToDisplay >= 3 && this.showThirdTile()}
        </View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#341644',
    flex: 1,
    padding: 40
  },
  box: {
    flexDirection: 'row'
  },
  columnBox: {
    flex: 0.5
  },
  buttoncontainer: {
    overflow: 'hidden',
    marginBottom: 10,
    alignItems: 'center',
    maxHeight: 140,
  },
  button1: {
    height: '100%',
    width: '100%',
  },
  button2: {
    // height: '100%',
    // width: '100%',
    // overflow: 'hidden',
    position: 'relative',
  },
  button3: {
    overflow: 'hidden',
    height: '100%',
    marginLeft: 10,
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  text1: {
    color: 'white',
    fontSize: 20,
    position: 'absolute',
    top: 115
  },
  text2: {
    color: 'white',
    fontSize: 20,
    position: 'absolute',
    top: 115
  },
  image: {
    height: 250,
    width: 300
  }
})
