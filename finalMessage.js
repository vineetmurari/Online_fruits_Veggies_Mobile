import React, { useState } from 'react';
import { Text, TextInput, View, Image, StyleSheet, Button,Alert } from 'react-native';

const final = () => {
    const [Username, setUsername] = useState('');
    const [password, setpassword] = useState('');
    return (
      <Text> Success! Your Order is placed!!</Text>
    );
  }

  export default final;