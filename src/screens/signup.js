import React,{useState,useEffect} from 'react';
import {Alert,View , Text,StyleSheet,ScrollView} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import * as ImagePicker from 'react-native-image-picker';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Geolocation from '@react-native-community/geolocation';
import { AsyncStorage } from 'react-native';


const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};


function signup(props){
    const [email,setemail] = useState("");
    const [username,setUsername] = useState("");
    const [fullname,setfullname] = useState("");
   
    // const [phonenumber,setphonenumber] = useState("");
   
    const [password,setPassword] = useState("");
    const [image_source,setImage] = useState("");
    const [Mycordinate, setCordinate] = useState({});
    

    const save_data=()=>{

      let user = {

        email,username,password,fullname,image_source,Mycordinate
      }

      console.log("user==>",Mycordinate.latitude)

      var formdata = new FormData();
        formdata.append("Full_Name", fullname);
        formdata.append("Email", email);
        formdata.append("Username", username);
        formdata.append("Password", password);
        formdata.append("Image", image_source);
        formdata.append("Sender_ID", "dCCqEA1dRbyN_9YmWCRDDD:APA91bGpyATcY7d-IH2ksllRzmWuOWk7fn1HsHD71kQWdaPiYxqHYCsbbqKdVL1pjoSf4wRtzzgoctlf0d6LXwNbC03b3f7g__tW2GSKaBIzdAvYpbXf-07bMYzCq5XWVfCxqppacAGL");
        formdata.append("Device_type", "android");
        formdata.append("latitude", Mycordinate.latitude);
        formdata.append("longitude", Mycordinate.longitude);

        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };

        fetch("https://maesamraza.pythonanywhere.com/User_Signup", requestOptions)
        .then(response => response.json()

        )
        .then(result => {console.log("my result is",result)


        if(result.status == true){
          _storeData = async () => {
        try {
          await AsyncStorage.setItem("userdata", JSON.stringify(result.data))

        } catch (error) {
        // Error saving data
      }
      };
           Alert.alert(result.message);
          props.navigation.navigate("login",{result})
        }
        else{
          Alert.alert(result.message);
        }


      })
        .catch(error => console.log('error', error));




      }


          const open_picker=()=>{
             Alert.alert('Ok')
           
            ImagePicker.launchImageLibrary(options, (response) => {
                console.log('Response = ', response);
                
          
                if (response.didCancel) {
                  console.log('User cancelled image picker');
                } else if (response.error) {
                  console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                  console.log('User tapped custom button: ', response.customButton);
                  alert(response.customButton);
                } else {
                  // const source = { uri: response.uri };
                  const source = { 'name': response.fileName,'type':response.type,'uri':response.uri };
                  setImage(source)
            


          
                  // You can also display the image using data:
                  // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                  // alert(JSON.stringify(response));


                    console.log("source=>",source)
                }
              });
            }
           

  useEffect(()=>{

    Geolocation.getCurrentPosition(info => {

    
      setCordinate(info.coords)
      console.log("my location ",info.coords)
     
  
    });
  },[])


    return(



            
         
          <View style={styles.container}>

              <ScrollView>

             <View style={styles.container}>
           
            <View>
            <Text style={{alignSelf:"center",fontSize:25,fontWeight:'300',fontWeight:'bold',color:'black',letterSpacing:2.5,textAlign:'center'}}>LIVE TRACKING:</Text>
            <Text style={{marginTop:10,alignSelf:"center",fontSize:20,fontWeight:'200',fontWeight:'bold',color:'black',letterSpacing:1.5,marginLeft:20}}>Please leave contact details:</Text>

            <Text style={{alignSelf:"center",fontSize:14,fontWeight:'100',padding:34,color:'grey',fontFamily: 'sans-serif',letterSpacing:2.5}}>In case you need to be contacted about your service </Text>



            <View  style={styles.inputfield}>
                <TextInput
                style={styles.input}

                value={email} onChangeText={(email)=>setemail(email)} placeholder="Email address"/ >


            <TextInput
            style={styles.input}

             placeholder="Username" value={username} onChangeText={(username)=>setUsername(username)}/>

             <TextInput
            style={styles.input}

             placeholder="Full Name" value={fullname} onChangeText={(fullname)=>setfullname(fullname)}/>

{/*            
                     <TextInput
                style={styles.input}

                value={phonenumber} keyboardType = 'numeric' onChangeText={(phonenumber)=>setphonenumber(phonenumber)} placeholder="Phone Number"/ > */}

             


            <TextInput
            style={styles.input}

            secureTextEntry={true} placeholder="Set Password" value={password} onChangeText={(password)=>setPassword(password)}/>

        <Button style={styles.select_image} mode="contained"title="LOGIN" onPress={open_picker}><Text style={{letterSpacing:2.5,color:'black',fontWeight:'bold'}}>Select Image</Text></Button>




              
        </View>
       

          </View>
         
          </View>
         
        </ScrollView>
        <Button style={styles.signin} mode="contained" onPress={save_data}><Text style={{letterSpacing:2.5,color:'black',fontWeight:'bold'}}>CREATE AN ACCOUNT</Text></Button>
    </View>
   



  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    

  },


  signin: {
    width: 300,
    height: 54,
    padding: 10,
    
    borderRadius:10,
    marginLeft:30,
    backgroundColor:'lightgrey',
    position:'absolute',
    bottom:10



  },
  inputfield:{

    margin:22,
    // marginTop:2,




  },
  input: {
    width: 320,
    height: 44,
    padding: 5,
    marginBottom: 20,
    backgroundColor:'transparent',





  },
  select_image:{
    backgroundColor:'lightgrey',

  }



});

export default signup
