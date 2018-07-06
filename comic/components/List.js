import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  list: {
    width: '100%'
  },
  item: {
    backgroundColor: 'pink',
    marginBottom: 5,
    padding: 15,
  }
})

export default class List extends Component {

  renderListItem = (text, i) => {
    return (
      <TouchableOpacity 
        key={i}
        style={styles.item}
        onPress={() => this.props.onPressItem(i)}
      >
        <Text>{text}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.list}>
        {this.props.list.map(this.renderListItem)}
      </View>
    )
  }
}