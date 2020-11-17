import React, { useState } from 'react';
import {ScrollView,Image,StyleSheet ,Button, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body} from "native-base";
import Images from './imagecollection.js';

const products = () => {
    
    const [items, setitems]= useState([{"id":"0","item": "Apple", "Price":"5",Qty:0, "Desc":"Fresh Apple from Simla","path":"1"}
  ,{"id":"1","item": "Banana", "Price":"3",Qty:0, "Desc":"Fresh and clean Banana bought directly from the plant","path":"2"},
  {"id":"2","item": "Fresh Orange", "Price":"5",Qty:0, "Desc":"Clean Orange from Farm","path":"4"},
  {"id":"3","item": "Brinjal", "Price":"5",Qty:0, "Desc":"Organic veggie - Brinjal","path":"3"},
  {"id":"4","item": "Fresh potato", "Price":"5",Qty:0, "Desc":"Organic veggie","path":"5"}]);

  const [tot, settot]=useState(0);

  const additams = index => e => {

    console.log('index: ' + index);
    let newArr = [...items]; // copying the old datas array
    newArr[index].Qty = newArr[index].Qty+1; // replace e.target.value with whatever you want to change it to

    setitems(newArr); 
    settot(tot+1)
}
const delitems = index => e => {

  console.log('index: ' + index);
  let newArr = [...items]; // copying the old datas array
 if(!newArr[index].Qty==0){
  newArr[index].Qty = newArr[index].Qty-1; // replace e.target.value with whatever you want to change it to
 }
  setitems(newArr); 
  settot(tot+1)
} 


    return (
      <React.Fragment>
        <View  style={{flexDirection:'row', flexWrap:'wrap', backgroundColor:'#D3D0FE'}}>
          <Text style={{padding:20}}>
            <Button title='Logout'/>
          </Text>
          <Text style={{paddingTop:20,paddingBottom:20, paddingLeft:10, paddingRight:20}}>
            Total Price : ${tot}
          </Text>
          <Text style={{paddingLeft:3, paddingTop:20, paddingBottom:20}}>
            <Button title='Checkout'/>
          </Text>
        </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
       {
         
                        items.map((y) => {
                            return (  
                              <Card key={y.item}>
                              <CardItem header>
                            <Text>{y.item}</Text>
                              </CardItem>
                              <CardItem>
                                <Body>
                                 <Image source={Images[y.path]} style={styles.tinyLogo} />
                                  <Text style={{padding:20}}>
                                    {"\n"}
                                    Price: ${y.Price}
                                    {"\n"}
                                    Quantity:  {y.Qty}
                                    {"\n"}
                                  </Text>
                                  <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                                  
                                  <Button title="Add items (+)"
                                  onPress={additams(y.id)}

                                  />
                                  <Text>
                                    {"               "}
                                  </Text>
                                  <Button title="Remove items (-)"
                                  onPress={delitems(y.id)}/>
                               
                                  </View>
                                </Body>
                              </CardItem>
                              <CardItem footer>
                            <Text>{y.Desc}</Text>
                              </CardItem>
                           </Card>
                           );
                        })
                       
                    }
        </ScrollView>
        </React.Fragment>
    );
  }


  const styles = StyleSheet.create({
    
    tinyLogo: {
      height: 100*2,
      width: 100*2,
      resizeMode: "contain"
    }
  });


  export default products;