import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { AppRegistry, Image } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Ni Hao {this.props.name}!</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, this.props.ms);
  }

  //if this.state.showText == TRUE then this.props.text == ''
  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

export default class App extends React.Component {
 render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
    <View style={styles.container}>
      <View style={{flex: 2, backgroundColor: 'powderblue'}} >
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text>Hello {this.props.name}!</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text>Example of props</Text>
        <Greeting name='Zach' />
          <Greeting name='Ken' />
          <Greeting name='Jian Kang' />
      </View>
        <View style={{flex: 2, backgroundColor: 'skyblue'}}>
          <PizzaTranslator/>
        </View>
        <View style={{flex: 2, backgroundColor: 'steelblue'}}>
        <Text>Example of state.</Text>
          <Blink text='1 second' ms={1000} />
          <Blink text='3 seconds' ms={3000} />
          <Blink text='300 milliseconds' ms={300} />
          <Text>Alright Nice! This is going to turn into a rabbit hole so I'm gonna stop for the night.</Text>
    </View>
   </View>
    );
  }
}

//justifyContent: 'center',

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
