import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  List,
  ListItem
} from 'react-native';
import { fetchData } from './data';

class EventListItem extends Component {
	render() {
		return (
			<Text style={{fontSize: 20}}>
				{this.props.location ? this.props.location : "No location"}
			</Text>
		);
	}
}

export default class EventList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null
		}
	}

	componentWillMount(){
		//getting new data from server
		fetchData().then((data) => {
		  this.setState({
				data: data
		  });
		})
	}

	_renderItem = ({item}) => {
		return (
			<EventListItem
				location={item.location}
			/>
		);	
	}

	render() {
		if (!this.state.data) {
			return (
				<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
					<Text>Loading data...</Text>
				</View>
			);
		}
		return (
			<FlatList
			  data={this.props.data}
			  renderItem={this._renderItem}
			/>
		);
	
	}
}
