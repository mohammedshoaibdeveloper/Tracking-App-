import React,{useState,useEffect} from 'react';
import {Alert,View , Text,StyleSheet} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';
import { AsyncStorage } from 'react-native';



function login(props){

    const [Username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [Mycordinate, setCordinate] = useState({});

    const save_data=()=>{

      let user = {

        Username,password,Mycordinate
      }

      console.log("user==>",Mycordinate.latitude)

      var formdata = new FormData();
       
        formdata.append("Username", Username);
        formdata.append("Password", password);
        
        formdata.append("Sender_ID", "dCCqEA1dRbyN_9YmWCRDDD:APA91bGpyATcY7d-IH2ksllRzmWuOWk7fn1HsHD71kQWdaPiYxqHYCsbbqKdVL1pjoSf4wRtzzgoctlf0d6LXwNbC03b3f7g__tW2GSKaBIzdAvYpbXf-07bMYzCq5XWVfCxqppacAGL");
        formdata.append("Device_type", "android");
        formdata.append("latitude", Mycordinate.latitude);
        formdata.append("longitude", Mycordinate.longitude);
        console.log("formdata=>",formdata)

        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };

        fetch("https://maesamraza.pythonanywhere.com/Login", requestOptions)
        .then(response => response.json()

        )
        .then(result => {console.log("my result is",result)


        if(result.status == true){
          _storeData = async () => {
        try {
          await AsyncStorage.setItem("userdata", JSON.stringify(result.data))
          await AsyncStorage.getItem("userdata")


        } catch (error) {
        // Error saving data
      }
      };
           Alert.alert(result.message);
          props.navigation.navigate("map",{result})
        }
        else{
          Alert.alert(result.message);
        }


      })
        .catch(error => console.log('error', error));




      }
      useEffect(()=>{

        Geolocation.getCurrentPosition(info => {
    
        
          setCordinate(info.coords)
          console.log("my location ",info.coords)
         
      
        });
      },[])
    









    return(




          <View style={styles.container}>
            
            <View style={{position:'absolute',top:14}}>
            <Text style={{alignSelf:"center",fontSize:25,fontWeight:'300',fontWeight:'bold',color:'black',letterSpacing:2.5,textAlign:'center'}}>LIVE TRACKING:</Text>

            <Text style={{alignSelf:"center",fontSize:15,paddingTop:5,fontWeight:'100',padding:44,color:'grey',fontFamily: 'sans-serif',letterSpacing:2.5}}>Please enter the username & password you've created for your account </Text>

            <Text style={{alignSelf:"center",fontSize:25,fontWeight:'250',fontWeight:'bold',color:'black',letterSpacing:2.5}}>My Credentials Is:</Text>

            <View  style={styles.inputfield}>
                <TextInput
                style={styles.input}

                value={Username} onChangeText={(text)=>setUsername(text)} placeholder="Username"/ >


            <TextInput
            style={styles.input}

            secureTextEntry={true} placeholder="Password" value={password} onChangeText={(password)=>setPassword(password)}/>
            
        </View>

          </View>
        <View style={styles.SIGNIN}>


        <Button style={styles.signin} mode="contained"title="LOGIN" onPress={save_data}><Text style={{letterSpacing:2.5,color:'black',fontWeight:'bold'}}>SIGN IN</Text></Button>

        
        <View style={styles.reg}>
          <Text style={styles.account}>Don't Have an account?</Text>

          <Text style={styles.register} onPress={()=>props.navigation.navigate("signup")}>Regiter Now</Text>
          

          </View>
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
    marginTop: 10,
    borderRadius:10,
    marginLeft:30,
    color:'blue'



  },
  SIGNIN:{
      position:'absolute',
      bottom:20

  },
  signin: {
    width: 300,
    height: 54,
    padding: 10,
    // marginTop: 20,
    borderRadius:10,
    marginLeft:30,
    backgroundColor:'lightgrey'



  },
  inputfield:{

    margin:22,



  },
  input: {
    width: 320,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor:'transparent',





  },
  reg:{
    flexDirection:'row',
    marginLeft:100,
    marginTop:5
   
    
    

  },
  register:{
    color:'blue'
    
  },
  account:{
    color:'black'

  }


});

export default login
