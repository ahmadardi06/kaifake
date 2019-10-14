import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

import { ListItem, FlatList } from 'react-native-elements';

const DeviceWidth = Dimensions.get('window').width;

import { MonoText } from '../components/StyledText';

export default class ProfileScreen extends React.Component {

  render() {
    const lists  = [
      {
        name: 'Arrazaqul Fadilah',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
    ];

    const menus = [
      {
        title: 'Settings',
        icon: 'cog'
      },
      {
        title: 'Trips',
        icon: 'jet'
      },
    ];

    return (
      <View>
        {
          lists.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{
                source: l.avatar_url && { uri: l.avatar_url },
                title: l.name[0]
              }}
              title={l.name}
              subtitle={l.subtitle}
              bottomDivider
            />
          ))
        }

        {
          menus.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: Platform.OS == 'ios' ? 'ios-' + item.icon : 'md-' + item.icon, type: 'ionicon' }}
              bottomDivider
              chevron
            />
          ))
        }
      </View>
    );
  }
}

ProfileScreen.navigationOptions = {
  title: 'More',
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
});
