import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.title}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.dimesion,{backgroundColor:'red'}]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.dimesion,{backgroundColor:'blue'}]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.dimesion,{backgroundColor:'green'}]}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:10,
    marginVertical:5
  },
  dimesion:{
    width:100,
    height:100,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:5,
    borderRadius:5
  },
  container:{
    flex:1,
    flexDirection:'row',
    marginHorizontal:'auto',
  }
});
