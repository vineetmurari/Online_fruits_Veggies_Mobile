import React, { useState } from 'react';
import { Text, TextInput, View, Image, StyleSheet, Button,Alert,Picker } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Actions,Router,Scene} from 'react-native-router-flux';

const Form =()=>{
    const [Addr, setAddr] = useState('');
    const [selectedValue, setSelectedValue] = useState("Use Existing Address");
return(
    <ScrollView>
     <View>
         <Text styles={{padding:10}}>
             Cash On Delivary - Confirm your Billing Address
         </Text>
         </View>   
    <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        
    <Picker 
      selectedValue={selectedValue}
      style={styles.pickerStyle}
      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
    >
      <Picker.Item label="Use Existing Address" value="Use Existing Address" />
      <Picker.Item label="Add Adddress" value="Add Adddress" />
    </Picker>

    <View>
        {selectedValue=='Add Adddress'?(
    <View>
        <View style={styles.separator} />
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Address *"
        defaultValue={Addr}
        style={{padding: 10}}
        onChangeText={text => setAddr(text)}
      />
      <View style={styles.separator} />
      </View>
        ):null}  
    </View>
<View style={{padding:10}}>
    <Button title="Confirm Order" onPress={()=>{if(selectedValue=='Add Adddress' && Addr==''){
         Alert.alert("Please fill the '*' marked fields") 
    }else{
        Actions.finalMessage();
    }}}/>
    </View>

  </View>
  </ScrollView>

)

}

const styles = StyleSheet.create({
    separator: {
      marginVertical: 3,
      borderBottomColor: '#211F1F',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
      pickerStyle:{  
        height: 150,  
        width: "80%",  
        color: '#344953',  
        justifyContent: 'center',  
    }  

  
  });

export default Form;