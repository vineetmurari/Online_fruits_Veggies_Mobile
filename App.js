import React, { useState } from 'react';
import { Text, TextInput, View, Image, StyleSheet, Button,Alert } from 'react-native';
import {Actions,Router,Scene,Stack} from 'react-native-router-flux';
import Products from './Products';
import Login from './Login'
import Checkout from './Checkout';
import finalMessage from './finalMessage';
import Forms from './Forms';


const App = () => {
 
  return (
    <Router>
    <Stack key="root">
    <Scene key="Login" component={Login} title="Login"   />
    <Scene key="Products" component={Products} title="Products"  />
    <Scene key="Checkout" component={Checkout} title="Checkout" />
    <Scene key="finalMessage" component={finalMessage} title="Orders" />
    <Scene key="Forms" component={Forms} title="Billing Address" />
    </Stack>
  </Router>
  );
}

export default App;