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
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/home.svg')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.homeText}>
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
    tabBarLabel: 'How to Play',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/instructions.svg')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructionsText}>1. Look at the picture</Text>
        <Text style={styles.instructionsText}>2. Is it Jesus?</Text>
        <Text style={styles.instructionsText}>3. U decide</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
    );
  }
}

class GameScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructionsText}>
          Here is where the fun begins
        </Text>
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
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    showIcon: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 24
      },
      style: {
        backgroundColor: 'pink'
      }
    }
  }
);

const MyApp = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
    navigationOptions: {
      title: 'Nativity Play',
      headerTitleStyle: { alignSelf: 'center' }
    }
  },
  Game: {
    screen: GameScreen,
    navigationOptions: {
      title: 'Game Play'
    }
  }
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
    justifyContent: 'center',
    padding: 6
  },
  instructionsText: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    padding: 4
  },
  homeText: {
    textAlign: 'center',
    fontSize: 42,
    color: 'purple'
  },
  icon: {
    width: 26,
    height: 26
  }
};

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
