import {StatusBar, StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';

const App = () => {
  // useColorScheme to set styles for dark mode and light mode
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={[
        isDarkMode ? styles.dark : styles.light,
        {flex: 1, alignItems: 'center', justifyContent: 'center'},
      ]}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Text
        style={[isDarkMode ? {color: 'white'} : {color: 'black'}, styles.text]}>
        Hello World! ❤
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  light: {
    backgroundColor: 'white',
  },
  dark: {
    backgroundColor: 'black',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
