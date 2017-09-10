import React from 'react';
import { StyleSheet, View } from 'react-native';

import SearchBar from './components/searchbar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'chocolate',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 20,
  },
});
