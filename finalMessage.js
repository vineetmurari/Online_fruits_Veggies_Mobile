import React, { useState , useEffect} from 'react';
import {  TextInput, View, Image, StyleSheet, Button,Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Item} from "native-base";
import { Actions } from 'react-native-router-flux';
const final = () => {
 return(
   <View>
     <View style={{backgroundColor:'#CCF8FA', height:'10%'}}>
       <Text style={{textAlign:'center', justifyContent:'center', alignItems:'center'}}>
         Order status
       </Text>
     </View>
     <View style={{padding:20}}>
   <View style={{backgroundColor: '#47F99A', justifyContent:'center', padding:10 }}>
     <Card>
      <CardItem>
        <Body>
          <Text>
            Your order is placed!!
          </Text>
        </Body>
      </CardItem>
     </Card>

   </View>

   <View style={{backgroundColor: '#47F99A', justifyContent:'center',padding:10 }}>
     <Card>
      <CardItem>
        <Body>
          <Text>
           Thankyou for your order
          </Text>
        </Body>
      </CardItem>
     </Card>

   </View>

   
   <View style={{backgroundColor: '#47F99A', justifyContent:'center', padding:10 }}>
     <Card>
      <CardItem>
        <Body>
          <Text>
           you will recieve the products Soon
          </Text>
        </Body>
      </CardItem>
     </Card>

   </View>

   </View>

    <View style={{width:'40%', alignSelf:'center'}}>
      <Button title='Logout' onPress={()=> {Actions.Login()}}/>
    </View>

   </View>
 )
}
  

  export default final;