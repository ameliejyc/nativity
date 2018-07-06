import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  }
})

export default class Title extends Component {

  render() {
    return (
      <Animatable.Text style={styles.title} animation="slideInDown" iterationCount='infinite' direction="alternate" easing="ease">Amelie's Todos</Animatable.Text>
    )
  }
}