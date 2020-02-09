import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Stars extends React.Component{
	render(){
		return(
			<View style={{marginTop:5,marginLeft: 15,width: '70%',height: '30%',display: 'flex',flexDirection:'row',alignSelf:'center'}}>
				<View style={{flex:1}}>
			        <Icon name="star" size={16} color="blue"/>
			    </View>
			    <View style={{flex:1}}>
			        <Icon name="star" size={16} color="blue"/>
			    </View>
			    <View style={{flex:1}}>
			        <Icon name="star" size={16} color="blue"/>
			    </View>
			    <View style={{flex:1}}>
			        <Icon name="star" size={16} color="blue"/>
			    </View>
			    <View style={{flex:1}}>
			        <Icon name="star" size={16} color="blue"/>
			    </View>
			</View>
			);
	}
}