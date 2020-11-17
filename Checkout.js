import React, { useState } from 'react';
import {  TextInput, View, Image, StyleSheet, Button,Alert,ScrollView,Picker, _ScrollView,FlatList,Text } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Item} from "native-base";




const checkout = (props) => {
    
    return (
      <React.Fragment>
      <View > 
             <Text style={{textAlign: "center",color:'blue'}}>Order Summary</Text>  
          <Text style={{textAlign: "center",color:'blue'}}> Total Price: ${props.data[1]}</Text>  
              
              <Card style={{backgroundColor:'blue'}}>
              <CardItem>
                <Body>
                  {
                    props.data[0].map((y)=>{
                      if(y.Qty!=0){
                      return(
                      
                      <FlatList
                      data={[
                      y
                      ]}
                       renderItem={({item}) => (<View key={item.id}> 
                      <Text> Item : {item.item} {"\n"} Price : ${item.Price} {"\n"} Quantity : {item.Qty}</Text> 
                      <View style={styles.separator} />
                      </View>)}
                        />
                    )}else if(y.Qty==0 && y.id==props.data[0].length-1){
                      return( <Text> No items to show !!!</Text>)
                    } })               
}
             </Body>
                    </CardItem>
           </Card>
           </View>
           <ScrollView>
            <Text>Name</Text>
            <Text>Email</Text>
            <Text>Address</Text>
            <Text>...</Text>
            <Text>Name</Text>
            <Text>Name</Text>

           </ScrollView>
           </React.Fragment>
    );
  }

  const styles = StyleSheet.create({
   
    separator: {
      marginVertical: 4,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });

  

  export default checkout;