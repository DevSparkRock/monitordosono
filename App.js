﻿import React from 'react';
import { StyleSheet, Platform, Text, View, Image, TextInput, Alert, Button, } from 'react-native';


class SplashScreen extends React.Component {
  render() {
    const viewStyles = [styles.container, {backgroundColor: '#1C1C1C'}];
    const textStyles = {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold'
    };

    return (
      <View style={viewStyles}>
        <Image source={require('./src/image/sono.png')}style={styles.logo}/>
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true }
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        5000
      )
    );
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }

    return (
      <View style={styles.container}>
        <Image source={require('./src/image/sono.png')}
        style={styles.logoquest}/>
      
      <TextInput style={styles.input}
// Adding hint in TextInput using Placeholder option.
placeholder=" Que horas você foi para a cama?" 
placeholderTextColor="grey"

//
      
// Making the Under line Transparent.

// Making the Text Input Text Hidden.
secureTextEntry={false}
/>
<TextInput
style={styles.inputquest}
// Adding hint in TextInput using Placeholder option.
placeholder=" Que horas você desligou as luzes para dormir?"          
// Making the Under line Transparent.
placeholderTextColor="grey"
underlineColorAndroid="transparent"
// Making the Text Input Text Hidden.
secureTextEntry={false}
/>
<TextInput
style={styles.inputquest}
// Adding hint in TextInput using Placeholder option.
placeholder=" Quanto tempo você demorou para iniciar o sono?"          
// Making the Under line Transparent.
placeholderTextColor="grey"
underlineColorAndroid="transparent"
// Making the Text Input Text Hidden.
secureTextEntry={false}
/>
<TextInput
style={styles.inputquest}
// Adding hint in TextInput using Placeholder option.
placeholder=" Quantas vezes você acordou na noite passada?"          
// Making the Under line Transparent.
placeholderTextColor="grey"
underlineColorAndroid="transparent"
// Making the Text Input Text Hidden.
secureTextEntry={false}
/>
<TextInput
style={styles.inputquest}
// Adding hint in TextInput using Placeholder option.
placeholder=" Quanto tempo você ficou acordado ao longo da noite?"          
// Making the Under line Transparent.
placeholderTextColor="grey"
underlineColorAndroid="transparent"
// Making the Text Input Text Hidden.
secureTextEntry={false}
/>
<TextInput
style={styles.inputquest}
// Adding hint in TextInput using Placeholder option.
placeholder=" Que horas você acordou pela manhã?"          
// Making the Under line Transparent.
placeholderTextColor="grey"
underlineColorAndroid="transparent"
// Making the Text Input Text Hidden.
secureTextEntry={false}
/>
<TextInput
style={styles.inputquest}
// Adding hint in TextInput using Placeholder option.
placeholder="Que horas você se levantou da cama?"          
// Making the Under line Transparent.
placeholderTextColor="grey"
underlineColorAndroid="transparent"
// Making the Text Input Text Hidden.
secureTextEntry={false}
/>
<TextInput
style={styles.inputquest}
// Adding hint in TextInput using Placeholder option.
placeholder="Quantas horas você dormiu na noite passada?"          
// Making the Under line Transparent.
placeholderTextColor="grey"
underlineColorAndroid="transparent"
// Making the Text Input Text Hidden.
secureTextEntry={false}
/>
  
<View style={[{ 
      width: "80%",
      padding: 20, 
      textAlign: 'center',
      borderRadius: 15,
      border:0,
      backgroundColor: "" }]}>
          <Button
            onPress={this.buttonClickListener}
            title="ENVIAR"
            color="#0000FF"
            height="10" 
            textAlign="center"
            padding="10"
            marginTop="20"
            />
        </View>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
  },
  logo: {
    width: 160,
    height: 139,
  },
  logoquest: {
    padding: -200,
    width: 160,
    height: 139,
  },
  input:{
    alignSelf: 'center',
    alignItems: 'center',
    height: 45,
    width: '90%',
    borderColor: 'white',
    borderWidth: 3,
    marginTop: 10,
    padding: 10,
    fontWeight: 'bold',
    color: 'white',
    borderRadius: 10,
    fontSize: 14,
  },
  inputquest:{
    alignSelf: 'center',
    alignItems: 'center',
    height: 45,
    width: '90%',
    borderColor: 'white',
    borderWidth: 3,
    marginTop: 10,
    padding: 10,
    fontWeight: 'bold',
    color: 'white',
    borderRadius: 10,
    fontSize: 14,
  },
   
});