import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50,
    width: '100%',
    justifyContent: 'center',
  }
})

export default class Input extends Component {

  state = {
    text: ''
  }

  onChangeText = (text) => this.setState({text})

  onSubmitEditing = () => {
    console.log(this.props)
    if (!this.state.text) return
    
    this.props.onSubmitEditing(this.state.text)
    this.setState({text: ''})
  }

  render() {
    const { text } = this.state
    return (
      <TextInput 
        value={text} 
        onSubmitEditing={this.onSubmitEditing} 
        onChangeText={this.onChangeText} 
        style={styles.input} 
        placeholder='What to do?' 
      />
    )
  }
}