import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import GestureScreen from './GestureScreen'

export default class Screen extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.mainContainer}>
        <View style={styles.dropZone}>
          <Text style={styles.text}>Drop me here!</Text>
        </View>
        <View style={styles.ballContainer} />
        <View style={styles.row}>
          <GestureScreen />
          <GestureScreen />
          <GestureScreen />
        </View>
        <Button
          title="Go to the scroll party"
          onPress={() =>
            navigate('Scroll')
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  ballContainer: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },  
  dropZone: {
    height: 150,
    backgroundColor: 'orange'
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  }
})