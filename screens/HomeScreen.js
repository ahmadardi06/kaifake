import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Dimensions,
} from 'react-native';

const DeviceWidth = Dimensions.get('window').width;

import { MonoText } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';

export default class HomeScreen extends React.Component {

  _interCityTrain = () => {
    console.log('choose inter city train')
  }

  _localTrain = () => {
    console.log('choose local train')
  }

  _airportTrain = () => {
    console.log('choose airport train')
  }

  _foodOnTrain = () => {
    console.log('choose foof on train')
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.welcomeContainer}>
          <Image
            source={
              require('../assets/images/kai.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={{flex:1, 
          alignItems:'center',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          justifyContent: 'flex-end',
          marginBottom: 5,
          marginLeft: -10
          }}>

          <View style={{flexDirection: 'row', backgroundColor: 'transparent', marginBottom: 30}}>

            <TouchableHighlight onPress={this._interCityTrain} underlayColor='transparent'>
              <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, margin:3, backgroundColor: 'transparent'}}>
                <Ionicons style={[{textAlign:'center'}]} name={Platform.OS === 'ios' ? 'ios-locate' : 'md-locate'} size={32} color="#e9e9e9" />
                <Text style={styles.getStartedText}>INTERCITY TRAIN</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight onPress={this._localTrain} underlayColor='transparent'>
              <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, margin:3, backgroundColor: 'transparent'}}>
                <Ionicons style={[{textAlign:'center'}]} name={Platform.OS === 'ios' ? 'ios-pin' : 'md-pin'} size={32} color="#e9e9e9" />
                <Text style={styles.getStartedText}>LOCAL TRAIN</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight onPress={this._airportTrain} underlayColor='transparent'>
              <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, margin:3, backgroundColor: 'transparent'}}>
                <Ionicons style={[{textAlign:'center'}]} name={Platform.OS === 'ios' ? 'ios-airplane' : 'md-airplane'} size={32} color="#e9e9e9" />
                <Text style={styles.getStartedText}>AIRPORT TRAIN</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight onPress={this._foodOnTrain} underlayColor='transparent'>
              <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, margin:3, backgroundColor: 'transparent'}}>
                <Ionicons style={[{textAlign:'center'}]} name={Platform.OS === 'ios' ? 'ios-beer' : 'md-beer'} size={32} color="#e9e9e9" />
                <Text style={styles.getStartedText}>FOOD ON TRAIN</Text>
              </View>
            </TouchableHighlight>

          </View>
        </View>

      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 12,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
