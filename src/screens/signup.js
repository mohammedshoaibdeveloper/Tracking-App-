import React,{useState} from 'react';
import {Alert,View , Text,StyleSheet,ScrollView} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
// import { SocialIcon } from 'react-native-elements'


function signup(props){
    const [email,setemail] = useState("");
    const [username,setUsername] = useState("");
    const [fullname,setfullname] = useState("");
   
    const [phonenumber,setphonenumber] = useState("");
   
    const [password,setPassword] = useState("");

    const save_data=()=>{

      let user = {

        email,username,phonenumber,password,fullname
      }

      console.log("user==>",user)
      // Alert.alert('Credentials', `${username} + ${password}`);

      
          }





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

           
                     <TextInput
                style={styles.input}

                value={phonenumber} keyboardType = 'numeric' onChangeText={(phonenumber)=>setphonenumber(phonenumber)} placeholder="Phone Number"/ >

             


            <TextInput
            style={styles.input}

            secureTextEntry={true} placeholder="Set Password" value={password} onChangeText={(password)=>setPassword(password)}/>


              
        </View>
       

          </View>
         
          </View>
         
        </ScrollView>
        <Button style={styles.signin} mode="contained"title="LOGIN" onPress={save_data}><Text style={{letterSpacing:2.5,color:'black',fontWeight:'bold'}}>CREATE AN ACCOUNT</Text></Button>
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



});

export default signup
