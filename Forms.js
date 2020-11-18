import React, { useState } from 'react';
import { Text, TextInput, View, Image, StyleSheet, Button,Alert,Picker } from 'react-native';
import {Actions,Router,Scene} from 'react-native-router-flux';

const Form =()=>{
    const [Addr, setAddr] = useState('');
    const [Pin, setPin] = useState('');
    const [City, setCity] = useState('');
    const [selectedValue, setSelectedValue] = useState("Use Existing Address");
return(
    <React.Fragment>
     <View >
         <Text style={styles.title}>
             Cash On Delivary - Confirm your Billing Address
         </Text>

    <View>    
    <Picker 
      selectedValue={selectedValue}
      style={styles.pickerStyle}
      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
    >
      <Picker.Item label="Use Existing Address" value="Use Existing Address" />
      <Picker.Item label="Add Adddress" value="Add Adddress" />
    </Picker>

        {selectedValue=='Add Adddress'?(
        <View>
        <View style={styles.separator} />
        <TextInput
        placeholder="Address *"
        defaultValue={Addr}
        onChangeText={text => setAddr(text)}
        style={{height: 30, alignSelf:'center'}}
      />
      
        <View style={styles.separator} />
       
        <TextInput
        placeholder="City *"
        defaultValue={City}
        onChangeText={text => setCity(text)}
        style={{height: 30, alignSelf:'center'}}
      />
      
        <View style={styles.separator} />
      
        <TextInput
        placeholder="Pincode *"
        defaultValue={Pin}
        onChangeText={text => setPin(text)}
        style={{height: 30, alignSelf:'center'}}
      />
    
      <View style={styles.separator} />
      </View>  ):null}  
</View> 

<View style={{height:100 , width:100, justifyContent:'center', alignSelf:'center'}}>   
    
     <Button title="Done" onPress={()=>{if(selectedValue=='Add Adddress' && Addr==''){
         Alert.alert("Please fill the '*' marked fields") 
    }else{
        Actions.finalMessage();
    }}}/>

</View>
 
  </View>
  </React.Fragment>
)

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
    pickerStyle:{  
        height: 100,  
        width: "60%",  
        color: '#344953',  
        justifyContent: 'center',  
        alignSelf:'center'
    }  ,
    container1: {
      backgroundColor:'#F9F3A6',
      shadowColor: "#000000",
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
        height: 5,
        width: 5
      },
    },
    separator: {
      marginVertical: 4,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
      width:'70%',
      height:'5%',
      alignSelf:'center'
    },
  
    title: {
      textAlign: 'center',
      marginVertical: 1,
      color: '#b22222',
      padding:10
    }
  
  });

export default Form;