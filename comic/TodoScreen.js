import React, { Fragment } from 'react'
import { StyleSheet, Button, View } from 'react-native'
import Title from './components/Title'
import Footer from './components/Footer'
import Input from './components/Input'
import List from './components/List'

export default class TodoScreen extends React.Component {
  static navigationOptions = {
    title: 'Todo Screen',
  }

  state = {
    list: ['have a good old time', 'do some react native', 'peace out']
  }

  onPressItem = (index) => {
    this.setState({list: this.state.list.filter((item, i) => i !== index)})
  }

  onSubmitEditing = (text) => {
    this.setState({list: [text, ...this.state.list]})
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Fragment>
        <View style={styles.container}>
          <Title />
          <Input onSubmitEditing={this.onSubmitEditing} />
          <List list={this.state.list} onPressItem={this.onPressItem} />
          {/*<Footer />*/}
        </View>
        <Button
          title="Go to the animation party"
          onPress={() =>
            navigate('Animation')
          }
        />
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})