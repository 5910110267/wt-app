import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from  "./Weather"



export default class Forecast extends React.Component {
    render() {
        return (

            <View style = {Subcomponent.container}>
                
            <Text style = {Subcomponent.font}>{this.props.main}</Text>
            <Text style = {Subcomponent.font}>{this.props.description}</Text>
            <Text style = {Subcomponent.font}>{this.props.temp}</Text>
            <Text style = {Subcomponent.font}>°C</Text>
            </View>
        );
    }
}

   
const Subcomponent = StyleSheet.create({
    container: {
        
        alignItems: 'center',
        
    },
    backdrop:{
        width: '100%', height: '100%'
    },
    font:{
        
        fontSize: 30,
    }
    
  });
