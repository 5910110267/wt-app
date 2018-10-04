import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import Forecast from './Forecast';

export default class Weather extends React.Component {

  constructor(props){
    super(props);
    this.state2 = {
        forecast: {
            main: 'Main',
            description: '-',
            temp: 28
        }
    }
}

  doIt = () => {
    console.log("Hello from console")
  }

  fetchData = () =>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
      .then((response) => response.json())
      .then((json) => {
          this.setState(
            {
              forecast:{
                main : json.weather[0].main,
                description : json.weather[0].description,
                temp : json.main.temp
              }
            }
          );
      })
      .catch((erroe) => {
        consloe.warn(error);
      });
  }

  componentDidMount = () => this.fetchData()



  render(){
    return(
      <View style = {styles.container}>
        <ImageBackground source={require('./Vista.jpg')} style = {styles.backdrop}>
        <Text style={Subcomponent.font} >Zip code is {this.props.zipCode}</Text>
        <Forecast {...this.state2.forecast} />
        
        </ImageBackground>
      </View>

    );
  }

  
}



const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop:{
    width: '100%', height: '100%',
    alignItems: 'center',

        // fontSize: 30,

  },
  
});

const Subcomponent = StyleSheet.create({
    container: {
      paddingTop: 25,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backdrop:{
      width: '100%', height: '100%'
    },
    font:{
        fontSize: 30,
    }
    
  });
