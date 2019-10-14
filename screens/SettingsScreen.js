import React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, Image, ScrollView, StyleSheet, TouchableHighlight, FlatList } from 'react-native';

class ListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.index);
  }

  render() {
    const item = this.props.item;
    return(
      <TouchableHighlight onPress={this._onPress} underlayColor='#dddddd'>
        <Card style={styles.article}>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Content>
            <Title>{item.title}</Title>
            <Paragraph>{item.content}</Paragraph>
          </Card.Content>
        </Card>
      </TouchableHighlight>
    );
  }
}

export default class SettingsScreen extends React.Component {

  _renderItem = ({item, index}) => (
    <ListItem
      item={item}
      index={index}
      onPressItem={this._onPressItem}
    />
  );

  _onPressItem = (index) => {
    console.log("Pressed row: "+index);
  };

  _keyExtractor = (item, index) => index.toString();

  render() {
    const articles = [
      {
        title: 'Porsche introduced Monday the Taycan 4S',
        content: 'Porsche has a new, cheaper version of the all-electric Taycan.', 
      },
      {
        title: 'Tesla Truck Looks Like This Mixed',
        content: 'Like an armored military vehicle of some sort, perhaps?.', 
      },
      {
        title: 'West Coast gas prices',
        content: 'The price at the pump is 24 cents lower than it was a year ago.', 
      },
      {
        title: "China's crackdown on sugar smuggling",
        content: 'A crackdown on sugar smuggling into China has left abundantly.'
      }
    ];
    return (
      <FlatList
        data={articles}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }

}

SettingsScreen.navigationOptions = {
  title: 'Deals',
};

const styles = StyleSheet.create({
  container: {
    margin: 6
  },
  article: {
    margin: 5,
    padding: 3
  }
});