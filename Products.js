import React, { useState } from 'react';
import {ScrollView,Image,StyleSheet ,Button, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body} from "native-base";
import Images from './imagecollection.js';

const products = () => {
    
    const [items, setitems]= useState([{"item": "Apple", "Price":"5","Qty":"0", "Desc":"Fresh Apple from Simla","path":"1"}
  ,{"item": "Banana", "Price":"3","Qty":"0", "Desc":"Fresh and clean Banana bought directly from the plant","path":"2"},
  {"item": "Fresh Orange", "Price":"5","Qty":"0", "Desc":"Clean Orange from Farm","path":"4"},
  {"item": "Brinjal", "Price":"5","Qty":"0", "Desc":"Organic veggie - Brinjal","path":"3"},
  {"item": "Fresh potato", "Price":"5","Qty":"0", "Desc":"Organic veggie","path":"5"}]);

    return (
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
                                 <Image source={Images[y.path]} style={styles.tinyLogo}/>
                                  <Text>
                                    {"\n"}
                                    Price: $ {y.Price}
                                    {"\n"}
                                    Qty:  {y.Qty}
                                    {"\n"}
                                  </Text>
                                  <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                                  <View style={{ height: 100, marginTop: 10 }}>
                                  <Button
                                    title="+"
                                    color="#640D83"
                                    />
                                    <Text>
                                      {
                                        "     "
                                      }
                                    </Text>
                                    </View>
                                    <View style={{ height: 100, marginTop: 10 }}>
                                    <Button
                                    title="-"
                                    color="#640D83"

                                    />
                                    </View>
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
    );
  }


  const styles = StyleSheet.create({
    
    tinyLogo: {
      width: 220,
      height: 150,
    }
  });

  export default products;