import React from 'react';
import { ScrollView, StyleSheet, Dimensions, View, StatusBar, Text, Icon } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Card } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const FirstRoute = () => (
  <View style={styles.container}>
    <Card title="Tidak ada data untuk ditampilkan">
      <Text style={styles.paragraph}>
        Tidak ada data untuk ditampilkan
      </Text>
      <Text style={styles.paragraphContent}>
        You don't have any trip or your trips has been cancel.
      </Text>
    </Card>
  </View>
);

const SecondRoute = () => (
  <View style={styles.container}>
    <Card title="Tidak ada data untuk ditampilkan">
      <Text style={styles.paragraph}>
        Tidak ada data untuk ditampilkan
      </Text>
      <Text style={styles.paragraphContent}>
        You don't have any trip or your trips has been cancel.
      </Text>
    </Card>
  </View>
);

export default class LinksScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'INTERCITY TRAIN' },
      { key: 'second', title: 'LOCAL TRAIN' },
    ],
  };

  renderLabel = ({ route, focused, color }) => {
    return (
      <View>
        <Text
          style={[focused ? styles.activeTabTextColor : styles.tabTextColor]}
        >
          {route.title}
        </Text>
      </View>
    )
  }

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={(props) =>
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'black' }}
            style={{backgroundColor: "white"}}
            renderLabel={this.renderLabel}
            indicatorStyle={{backgroundColor: "#555555"}}
          />
        }
      />
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'My Trips',
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  activeTabTextColor: {
    color: '#2d87bb'
  },
  tabTextColor: {
    color: '#ccc'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  paragraphContent: {
    marginTop: -12,
    marginBottom: 24,
    fontSize: 12,
    textAlign: 'center',
    color: '#34495e',
  },
  container: {
    margin: 10
    // borderRadius: 40,
    // borderColor: '#e9e9e9',
    // overflow: 'hidden'
  }
});