import React, { useState ,useEffect} from 'react';
import {  TextInput, View, Image, StyleSheet, Button,Alert,ScrollView,Picker, _ScrollView,FlatList,Text } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Item} from "native-base";
import Form from './Forms';
import { Actions } from 'react-native-router-flux';




const checkout = (props) => {

  const [isitemSelected, setisitemSelected]=useState(true)
    
    return (
      <React.Fragment>
      <View  style={{alignSelf:"auto"}}> 
             <Text style={{textAlign: "center",color:'blue'}}>Order Summary</Text>  
          <Text style={{textAlign: "center",color:'blue'}}> Total Price: ${props.data[1]}</Text>  
              
              <Card style={{backgroundColor:'blue'}}>
              <CardItem>
                <Body>
                  {
                    props.data[0].map((y)=>{
                      if(y.Qty!=0){
                        useEffect(() => {
                          setisitemSelected(false);
                        } );
                      return(
                      <FlatList key={y.id}
                      data={[
                      y
                      ]}
                       renderItem={({item}) => (<View key={item.id}> 
                      <Text> Item : {item.item} {"\n"} Price : ${item.Price} {"\n"} Quantity : {item.Qty}</Text> 
                      <View style={styles.separator} />
                      </View>)
                      }
                        />
                    ) }
                    else if(y.Qty==0 && y.id==props.data[0].length-1 ){
                     
                      if(isitemSelected){
                        return(
                      <Text key={y.id}> No items to show !!</Text>)
                      }
                    } 
                    })               
}
             </Body>
                    </CardItem>
           </Card>
           </View >
           <ScrollView >
           <View style={{alignSelf:"stretch"}}>
            {
            isitemSelected?(<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>
                Please order items!! before you checkout
            </Text>
            <View style={styles.separator} />
            <Button title="Order Now"
            onPress={()=>{Actions.Products()}}/>
            </View>):(<View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center',padding:20 }}><Button title="Confirm Order" onPress={()=>{Actions.Forms()}}/>
           </View> )}
            </View>
           </ScrollView>
           </React.Fragment>
    );
  }

  const styles = StyleSheet.create({
   
    separator: {
      marginVertical: 4,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    }
  });

  

  export default checkout;