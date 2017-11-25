import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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


export default class App extends React.Component {
 render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
	  <View style={styles.container}>
	    <Text>Hello {this.props.name}!</Text>
	  	<Image source={pic} style={{width: 193, height: 110}}/>
	  	<Text>Alright here I am!</Text>
        <Text>Shake your phone to open the developer menu.</Text>

        <Text>Alright, we got Images and components.</Text>
        <Text>Javescript code goes in render.</Text>    
	    
	    <Text>Example of props</Text>
	    <Greeting name='Zach' />
        <Greeting name='Ken' />
        <Greeting name='Jian Kang' />

	    <Text>Example of state.</Text>
        <Blink text='1 second' ms={1000} />
        <Blink text='3 seconds' ms={3000} />
        <Blink text='300 milliseconds' ms={300} />
        <Text></Text>
        <Text>Alright Nice! This is going to turn into a rabbit hole so I'm gonna stop for the night.</Text>
	 </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
