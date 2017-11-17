// @flow
import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { View, Image, Button, Text } from 'react-native';
// import Image from './components/Image';
// import HomeScreen from './components/HomeScreen';
// import InstructionsScreen from './components/InstructionsScreen';
// import MainScreenNavigator from './components/MainScreenNavigator';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//         <Home />
//       </View>
//     );
//   }
// }

class HomeScreen extends React.Component {
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
      <View style={styles.container}>
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

class InstructionsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'How to Play'
    // tabBarIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./notif-icon.png')}
    //     style={[styles.icon, { tintColor: tintColor }]}
    //   />
    // )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Here are some instructions on how to play my Jesus game</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
    );
  }
}

const MainScreenNavigator = TabNavigator(
  {
    Home: { screen: HomeScreen },
    Instructions: { screen: InstructionsScreen }
  },
  {
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63'
    }
  }
);

const MyApp = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
    navigationOptions: {
      title: 'Nativity Play'
    }
  }
  // Instructions: { screen: InstructionsScreen }
});

export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'palevioletred',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

//// Styles could have for the home page

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

// const styles = {
//   icon: {
//     width: 26,
//     height: 26
//   }
// };

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
