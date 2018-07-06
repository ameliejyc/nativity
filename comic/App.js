import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import { Dimensions } from 'react-native' 
import { Font } from 'expo'
import AnimationScreen from './AnimationScreen'
import TodoScreen from './TodoScreen'
import GestureContainer from './GestureContainer'
import ScrollScreen from './ScrollScreen'
import ImageReveal from './ImageReveal'
import Interpolation from './Interpolation'
import SlideOne from './SlideOne'
import Tappable from './Tappable'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

// const screenProps = storyOne
// const screenProps = bubbleScreens
screenProps.windowWidth = windowWidth
screenProps.windowHeight = windowHeight

const ComicBook = createStackNavigator(
  {
    Todo: { screen: TodoScreen },
    Animation: { screen: AnimationScreen },
    Gesture: { screen: GestureContainer },
    Scroll: { screen: ScrollScreen },
    ImageReveal: { screen: ImageReveal },
    Interpolation: { screen: Interpolation},
    SlideOne: { screen: SlideOne },
    Tappable: { screen: Tappable }
  },
  {
    navigationOptions: {
      gesturesEnabled: true,
      headerStyle: {
        backgroundColor: '#341644'
      }
    }
  },
  {
    headerMode: 'none'
  }
)

export default class App extends Component {
  state = {
    assetsLoaded: false
  }

  async componentDidMount() {
    try {
      await Font.loadAsync({
        oldrichium: require('./assets/fonts/Oldrichium.otf'),
        oldrichiumBold: require('./assets/fonts/OldrichiumBold.otf')
      })
    } catch (e) {
      console.warn(
        'There was an error loading assets. Reload the app to try again.'
      )
      console.log(e.message)
    } finally {
      this.setState({ assetsLoaded: true })
    }
  }

  render() {
    if (this.state.assetsLoaded) {
      return <ComicBook screenProps={screenProps} />
    } else {
      // return loading screen here in future
      return null
    }
  }
}
