import React,{useState,useEffect} from 'react';
import {Alert,View , Text,StyleSheet,Image} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
// import MapView from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE,Marker,Callout,Polygon,Circle } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

function map(props){

  state = {
    coordinates:[
      {name: '1', latitude:24.8853152,longitude: 67.036776},
      {name: '2', latitude:24.8845756,longitude: 67.0363898},
      {name: '3', latitude:24.885471,longitude: 67.0371193},
      {name: '4', latitude:24.8894808,longitude: 67.0378489},
      {name: '5', latitude:24.8902593,longitude:67.0395655},
      {name: '6', latitude:24.8927119,longitude: 67.0421833}

    ]
  }

 const showWelcomeMssage = ()=>{
   Alert.alert('Welcome to Hnh')
 }

 const [Mycordinate, setCordinate] = useState({});

  useEffect(()=>{

    Geolocation.getCurrentPosition(info => {

    
      setCordinate(info.coords)
      console.log("my location ",info.coords)
     
  
    });
  },[])

    return(




      <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: Mycordinate.latitude,
          longitude: Mycordinate.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <Polygon
        coordinates = {state.coordinates}
        fillColor={'rgba(100,200,200,0.3)'}
        strokeWidth = {3}
        />
        <Circle
        center = {{latitude: Mycordinate.latitude,longitude: Mycordinate.longitude}}
        radius = {1000}
        fillColor={'rgba(200,300,200,0.5)'}
        strokeWidth = {3}
        />

        <Marker
        draggable
        coordinate = {{latitude: Mycordinate.latitude,longitude: Mycordinate.longitude}}
       >

          <Callout onPress =  {showWelcomeMssage}>
            <Image 
            style = {{width:50,height:50}} 
            source={require('../images/sushi.png')}/>
            <Text>Garden</Text>
          </Callout>
         
        </Marker>
        {
        state.coordinates.map(marker=>{
          <Marker
          key={marker.name}
          coordinate={{latitude:marker.latitude,longitude:marker.longitude}}
          title = {marker.name}
          >
              <Callout>
            <Image 
            style = {{width:50,height:50}} 
            source={require('../images/sushi.png')}/>
            <Text>{marker.name}</Text>
          </Callout>


          </Marker>
        })}
      </MapView>
    </View>



  )
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex:1,
    height: '100%',
    
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

 


});

export default map
