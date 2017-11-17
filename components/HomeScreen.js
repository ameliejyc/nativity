import React, { Component } from 'react';
import { View, Image, Button, Text } from 'react-native';

// export default class Home extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.halfHeight} />
//         <View style={styles.quarterHeight} />
//         <View style={[styles.quarterHeight, { backgroundColor: '#CCC' }]} />
//       </View>
//     );
//   }
// }
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home'
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    // tabBarIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./chats-icon.png')}
    //     style={[styles.icon, { tintColor: tintColor }]}
    //   />
    // )
  };

  render() {
    return (
      <View>
        <Text>
          Welcome. Jesus is nearly born. But how well do you know his face?
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('Instructions')}
          title="CLick here for instructions"
        />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   icon: {
//     width: 26,
//     height: 26
//   }
// });

// var styles = {
//   container: {
//     flex: 1,
//     flexDirection: 'column'
//   },
//   halfHeight: {
//     flex: 2,
//     backgroundColor: '#FF3366'
//   },
//   quarterHeight: {
//     flex: 1,
//     backgroundColor: '#000'
//   }
// };
