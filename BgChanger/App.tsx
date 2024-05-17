import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [color, setColor] = useState('pink');

  function changeColor() {
    const hexCodes = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index++) {
      color += hexCodes.charAt(Math.floor(Math.random() * 16));
    }
    setColor(color);
  }

  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <StatusBar backgroundColor={color} />
      <TouchableOpacity style={styles.btn} onPress={changeColor}>
        <Text style={styles.btnText}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'purple',
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    paddingHorizontal: 30,
    paddingVertical: 15,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
