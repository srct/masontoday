import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { fetchData } from './data';
import EventList from './EventList';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null
    }
  }

  componentWillMount() {
    //getting new data from server
    fetchData().then((data) => {
      // if (!data) return;      
      this.setState({
        data: data
      });
    })
  }

  render() {
    return (
		<EventList 
			style={styles.listView}
			data={this.state.data}
		/> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listView: {
		flex: 1,
		margin: 16
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
