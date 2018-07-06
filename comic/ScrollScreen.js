import React, { Component } from "react"
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button
} from "react-native"

const screenWidth = Dimensions.get("window").width

const xOffset = new Animated.Value(0)

const Screen = props => {
  return (
    <View style={styles.scrollPage}>
      <Animated.View style={[styles.screen, transitionAnimation(props.index)]}>
        <Text style={styles.text}>{props.text}</Text>
      </Animated.View>
    </View>
  )
}

const transitionAnimation = index => {
  return {
    transform: [
      { perspective: 800 },
      {
        scale: xOffset.interpolate({
          inputRange: [
            (index - 1) * screenWidth,
            index * screenWidth,
            (index + 1) * screenWidth
          ],
          outputRange: [0.25, 1, 0.25]
        })
      },
      {
        rotateX: xOffset.interpolate({
          inputRange: [
            (index - 1) * screenWidth,
            index * screenWidth,
            (index + 1) * screenWidth
          ],
          outputRange: ["45deg", "0deg", "45deg"]
        })
      },
      {
        rotateY: xOffset.interpolate({
          inputRange: [
            (index - 1) * screenWidth,
            index * screenWidth,
            (index + 1) * screenWidth
          ],
          outputRange: ["-45deg", "0deg", "45deg"]
        })
      }
    ]
  }
}

export default class App extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: xOffset } } }],
          { useNativeDriver: true }
        )}
        horizontal
        pagingEnabled
        style={styles.scrollView}
      >
        <Screen text="Image 1" index={0} />
        <Screen text="Image 2" index={1} />
        <Screen text="Image 3" index={2} />
        <Button
          index={3}
          title="Go to the curtain party"
          onPress={() =>
            navigate('ImageReveal')
          }
        />
      </Animated.ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "row",
    backgroundColor: 'orange'
  },
  scrollPage: {
    width: screenWidth,
    padding: 20
  },
  screen: {
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    borderColor: 'black',
    borderStyle: 'dotted',
    borderWidth: 10,
    backgroundColor: "white"
  },
  text: {
    fontSize: 45,
    fontWeight: "bold"
  }
})
