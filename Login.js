import React, { useState } from 'react';
import { Text, TextInput, View, Image, StyleSheet, Button,Alert } from 'react-native';
import {Actions,Router,Scene} from 'react-native-router-flux';


const Login = () => {
  const [Username, setUsername] = useState('');
  const [password, setpassword] = useState('');
  return (
<React.Fragment>
<View style={styles.container}>
  <Text    style={{fontWeight: 'bold', padding: 5, fontFamily: 'monospace'}}>Online Fruits & Veggies</Text>
  <Image source={require('./assets/Logo.jpg')}
style={{  resizeMode: "cover",
height: 100,
width: 100
}}
/>

<View style={styles.separator} />
<Text  style={{fontWeight: 'bold', padding: 5, fontFamily: 'monospace'}}> Automate with Me - Demo Mobile App </Text>

</View>
    <View style={{padding: 75}}>
      <TextInput
        style={{height: 30}}
        placeholder="Username *"
        defaultValue={Username}
        style={{padding: 10}}
        onChangeText={text => setUsername(text)}
      />

<View style={styles.separator} />

      <TextInput
        style={{height: 20}}
        secureTextEntry={true}
        placeholder="Password *"
        defaultValue={password}
        style={{padding: 10}}
        onChangeText={text => setpassword(text)}
      />

<View style={styles.separator} />

        <View style={{paddingTop: 30, paddingBottom: 0}}>        
        <Button
           title="Sign In"
            color="#F99D81"
            accessibilityLabel="Learn more about this purple button"
            onPress={()=>{if(Username=='' || password=='' ){
              Alert.alert(`Please fill the details '*' mark fields`)
            }
            else if(Username=='Online_User' && password=='Online_User'){
              Actions.Products()
            }
          else{
            Alert.alert('Invalid User Credentials')
          }
        }}
          />
</View>


    </View>


    
    <View style={styles.separator} />
    <View style={styles.container1}>
    <Text style={styles.title}>
    Valid User : Online_User and Valid Password: Online_User
     </Text>
    <Text style={styles.title}>
**** This site developed for Demo purpose and utilized for Automation testing ****
    </Text>
    <Text style={styles.title}>
    Developer : Vineet
    </Text>

    </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "30%",
    alignItems: "center",
    height: "30%",
    textAlign: "center",
    backgroundColor:'#FBDFDF',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },
  },
  container1: {
    backgroundColor:'#F9F3A6',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },
  },
  separator: {
    marginVertical: 4,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  title: {
    textAlign: 'center',
    marginVertical: 1,
    color: '#b22222',
  }

});




export default Login;