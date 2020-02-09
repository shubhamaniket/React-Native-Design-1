import React from 'react';
import {Text,View,StyleSheet,Image,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Card extends React.Component{
	render(){
		return(
				<View style={styles.cardone}>
					<View style={styles.partone}>
						<View style={styles.crossbutton}>
							<TouchableOpacity><Icon name="times" size={17} color= 'grey' style={{alignSelf:'flex-end',padding: 5}}/></TouchableOpacity>
						</View>
						<View style={styles.circleimage}>
							<View style={{marginTop:15,width: 80,height: 80,alignSelf:'center',borderRadius: 100}}>
								<Image source={this.props.image} style={{width: 80,height: 80,borderRadius: 100}}/>
							</View>
						</View>
						<View style={styles.nameandtext}>
							<Text style={{fontWeight:'bold',textAlign: 'center'}}>{this.props.name}</Text>
							<Text style={{fontWeight:'bold',textAlign: 'center',color:'grey',padding:5}}>{this.props.work}</Text>
							<Text style={{fontWeight:'bold',textAlign: 'center',color:'grey'}}>{this.props.place}</Text>
						</View>
					</View>
					<View style={styles.parttwo}>
						<Text style={{color:'blue',borderWidth: 1,padding: 5,borderColor: 'blue',borderRadius: 50,position: 'absolute',bottom: 1.5 }}>+ Follow</Text>
					</View>
			    </View>
			);
	}
}
const styles = StyleSheet.create({
	cardone : {
		width: '15%',
		height: '80%',
		backgroundColor: '#FFFFFF',
		margin: 5,
		elevation: 2,
		display: 'flex',
	},
	partone : {
		flex:4,
		display: 'flex'
	},
	parttwo : {
		flex:1,
		alignItems:'center',
	},
	crossbutton : {
		flex : 0.8,
	},
	circleimage : {
		flex  : 4,
	},
	nameandtext : {
		flex : 3,
		marginTop: 25
	}
})  