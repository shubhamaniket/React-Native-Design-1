import React from 'react';
import {View,Text,TouchableOpacity,Button,TextInput,ImageBackground,ScrollView,StyleSheet,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../cards/card.js';
import Stars from '../cards/Stars.js';
export default class Discover extends React.Component {
  render() {
    return (
	     <View style={styles.container}>
	        <View style={styles.searchbar}>
	        	<View style={styles.searchicon}>
	        		<Icon name='search' size={20} color="black"/>
	        	</View>
	        	<View style={styles.textinput}>
	        		<TextInput style={styles.inputtext} placeholder="Search What You like"/>
	        	</View>
	        	<View style={styles.cameraicon}>
	        		<TouchableOpacity><Icon name='camera' size={20} color="black"/></TouchableOpacity>
	        	</View>
	        </View>
	        <ScrollView showsVerticalScrollIndicator={false} style={{flex : 1}} contentContainerStyle={styles.scrollcontainer}>
	        	<View style={styles.themes}>
	        		<View style={styles.themeone}>
	        			<View style={styles.texttheme}>
	        				<Text style={{fontWeight : 'bold',padding: 5}}>HOT</Text>
	        				<Text style={{fontSize : 10,padding: 5,color : 'grey'}}>Not to be Missed</Text>
	        			</View>
	        			<View style={styles.imagetheme}>
	        				<ImageBackground source={require('../assets/Images/verticalone.jpg')} style={{width: '100%',height: '100%'}}>

	        				</ImageBackground>
	        			</View>
	        		</View>
	        		<View style={styles.themetwo}>
	        			<View style={styles.texttheme}>
	        				<Text style={{fontWeight : 'bold',padding: 5}}>POPULAR</Text>
	        				<Text style={{fontSize : 10,padding: 5,color : 'grey'}}>Quite Exciting</Text>
	        			</View>
	        			<View style={styles.imagetheme}>
	        				<ImageBackground source={require('../assets/Images/verticaltwo.jpg')} style={{width: '100%',height: '100%'}}>

	        				</ImageBackground>
	        			</View>
	        		</View>
	        	</View>
	        	<View style={styles.guess}>
	        		<View style={{flex : 3}}>
	        			<Text style={{fontWeight : 'bold',fontSize:16}}>Guess Your Likes</Text>
	        		</View>
	        		<View style={{flex : 1}}>
	        			<TouchableOpacity><Text style={{color:'blue',fontSize : 14,textAlign : 'right'}}>More ></Text></TouchableOpacity>
	        		</View>
	        	</View>		        
		        <View style={styles.comments}>
		        	<ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{flex:1}} contentContainerStyle={{marginTop:20,height:280,width: 950}}>
			        	<View style={styles.designsone}>
			        		<View style={{flex:3.5}}>
			        			<ImageBackground source={require('../assets/Images/imageone.jpg')} style={{width: '100%',height:'100%',resizeMode: 'cover'}}/>
			        		</View>
			        		<View style={{flex:1,padding: 3}}>
			        			<Text style={{fontSize: 15,fontWeight:'bold',textAlign:'center',marginTop:5}}>Living Room</Text>
			        			<Stars/>
			        		</View>
			        	</View>
			        	<View style={styles.designstwo}>
			        		<View style={{flex:3.5}}>
			        			<ImageBackground source={require('../assets/Images/imagetwo.jpg')} style={{width: '100%',height:'100%',resizeMode: 'cover'}}/>
			        		</View>
			        		<View style={{flex:1,padding: 3}}>
			        			<Text style={{fontSize: 15,fontWeight:'bold',textAlign:'center',marginTop:5}}>Bed Room</Text>
			        			<Stars/>
			        		</View>
			        	</View>
			        	<View style={styles.designsthree}>
			        		<View style={{flex:3.5}}>
			        			<ImageBackground source={require('../assets/Images/imagethree.jpg')} style={{width: '100%',height:'100%',resizeMode: 'cover'}}/>
			        		</View>
			        		<View style={{flex:1,padding: 3}}>
			        			<Text style={{fontSize: 15,fontWeight:'bold',textAlign:'center',marginTop:5}}>Store Room</Text>
			        			<Stars/>
			        		</View>
			        	</View>
			        	<View style={styles.designsfour}>
			        		<View style={{flex:3.5}}>
			        			<ImageBackground source={require('../assets/Images/imagefour.jpg')} style={{width: '100%',height:'100%',resizeMode: 'cover'}}/>
			        		</View>
			        		<View style={{flex:1,padding: 3}}>
			        			<Text style={{fontSize: 15,fontWeight:'bold',textAlign:'center',marginTop:5}}>Hall</Text>
			        			<Stars/>
			        		</View>
			        	</View>
		        	</ScrollView>
		        </View>
		        <View style={[styles.guess,{marginLeft : 10}]}>
	        		<View style={{flex : 3}}>
	        			<Text style={{fontWeight : 'bold',fontSize:16}}>Suggested follows</Text>
	        		</View>
	        		<View style={{flex : 1}}>
	        			<TouchableOpacity><Text style={{color:'blue',fontSize : 14,textAlign : 'right'}}>More ></Text></TouchableOpacity>
	        		</View>
	        	</View>
	        	<View style={styles.follows}>
	        		<ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{flex:1}} contentContainerStyle={{height:280,width: 950}}>
			        	<Card image={require('../assets/Images/personeone.jpg')} name="Arthur Shelby" work="Interior Designer" place="Gotham"/>
			        	<Card image={require('../assets/Images/persontwo.jpg')} name="John Wick" work="Freelancer" place="New York"/>
			        	<Card image={require('../assets/Images/personthree.jpg')} name="Jeff Bezos" work="CEO Amazon" place="London"/>
			        	<Card image={require('../assets/Images/personfour.jpg')} name="Sundar Pichai" work="CEO Google" place="Washington"/>
			        	<Card image={require('../assets/Images/personfive.jpg')} name="Erling Ross" work="Designer" place="Paris"/>
			        	<Card image={require('../assets/Images/personsix.jpg')} name="Katie Haag" work="Photographer" place="Dubai"/>
		        	</ScrollView> 
	        	</View>
	        </ScrollView>
	     </View>
    );
  }
}

const styles = StyleSheet.create({
	container : {
		flex : 1,
		alignItems : 'center',
	},
	searchbar : {
		height: '8%',
		width: '90%',
		display: 'flex',
		flexDirection: 'row',
		marginTop: 20,
		backgroundColor: '#FFF8FF',
		elevation: 10
	},
	searchicon : {
		flex : 1,
		alignItems : 'center',
		justifyContent : 'center'
	},
	textinput : {
		flex : 3.5,
		alignItems : 'center',
		justifyContent : 'center'
	},
	cameraicon : {
		flex : 1,
		alignItems : 'center',
		justifyContent : 'center'
	},
	inputtext : {
		position : 'absolute',
		left: 0
	},
	scrollcontainer : {
		width: 350,
		height: 2000,
	},
	themes : {
		height: '4%',
		width: '94%',
		display: 'flex',
		flexDirection: 'row',
		marginTop: 20,
		alignSelf: 'center',
		display: 'flex',
		flexDirection: 'row',
	},
	themeone : {
		flex : 1,
		backgroundColor: '#FFFFFF',
		margin: 5,
		elevation: 8,
		display: 'flex',
		flexDirection : 'row',
		padding : 5
	},
	themetwo : {
		flex : 1,
		backgroundColor: '#FFFFFF',
		margin: 5,
		elevation: 8,
		display: 'flex',
		flexDirection :'row',
		padding: 5
	},
	texttheme : {
		flex : 2,
	},
	imagetheme : {
		flex : 1,
	},
	guess : {
		width: '91%',
		height: '1%',
		alignSelf: 'center',
		marginTop : 25,
		display: 'flex',
		flexDirection: 'row' 
	},
	designsone : {
		height: '95%',
		width: '20%',
		elevation: 6,
		margin: 5,
		display: 'flex',
		backgroundColor: '#FFFFFF'
	},
	designstwo : {
		height: '95%',
		width: '20%',
		elevation: 10,
		margin: 5,
		display: 'flex',
		backgroundColor: '#FFFFFF'
	},
	designsthree : {
		height: '95%',
		width: '20%',
		elevation: 10,
		margin: 5,
		display: 'flex',
		backgroundColor: '#FFFFFF'
	},
	designsfour : {
		height: '95%',
		width: '20%',
		elevation: 10,
		margin: 5,
		display: 'flex',
		backgroundColor: '#FFFFFF'
	},
	comments : {
		height: '15.5%',
		width: '90%',
		alignSelf:'center'

	},
	follows : {
		width: '90%',
		height: 250,
		marginTop:15,
		alignSelf : 'center'
	},
}) 