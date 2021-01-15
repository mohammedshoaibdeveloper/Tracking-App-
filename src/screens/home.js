import React,{useState} from 'react';
import {Alert,View , Text,StyleSheet} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import MapView from 'react-native-maps';


function home(props){

   


    return(
       

        

          <View style={styles.container}>
            <View style={{position:'absolute',top:14}}>
            <Text style={{alignSelf:"center",fontSize:25,fontWeight:'300',fontWeight:'bold',color:'black',letterSpacing:2.5,textAlign:'center'}}>LIVE TRACKING:</Text>
            <Text style={{alignSelf:"center",fontSize:15,paddingTop:15,fontWeight:'100',padding:40,color:'grey',fontFamily: 'sans-serif',letterSpacing:2.5,textAlign:'center'}}>Already have an account so please Login to your account otherwise register first</Text>

            <View>
            <Button style={styles.login} mode="contained"   title="LOGIN" onPress={()=>props.navigation.navigate("login")}>LOGIN</Button> 
          <Button style={styles.login} mode="contained"   title="LOGIN" onPress={()=>props.navigation.navigate("signup")}>SIGNUP</Button>
          </View>
          </View>
        <View style={{position:'absolute',bottom:35}}> 
           <Text style={{alignSelf:"center",fontSize:15,paddingTop:13,fontWeight:'100',padding:32,color:'grey',fontFamily: 'sans-serif',letterSpacing:1.5,textAlign:'center'}}>LIVE TRACKING uses your details for location purpose we want send notification .</Text> 
           

        </View>

           
            

        
      
    </View>
        

        

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
 
  },
  login: {
    width: 300,
    height: 54,
    padding: 10,
    marginTop: 20,
    borderRadius:10,
    marginLeft:30,
    backgroundColor:'black'
  
    
    
  },
  

  
});

export default home