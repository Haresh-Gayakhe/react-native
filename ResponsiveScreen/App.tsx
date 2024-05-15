import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}/>
      <View style={styles.main}>
        <View style={styles.section1} />
        <View style={styles.section2} />
      </View>
      <View style={styles.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width:wp(100),
    height:hp(100),
    backgroundColor:'red'
  },
  header:{
    width:wp(100),
    height:hp(15),
    backgroundColor:'green'
  },
  main:{
    flexDirection:'row'
  },
  section1:{
    width:wp(50),
    height:hp(70),
    backgroundColor:'blue'
  },
  section2:{
    width:wp(50),
    height:hp(70),
    backgroundColor:'yellow'
  },
  footer:{
    width:wp(100),
    height:hp(100),
    backgroundColor:'green'
  }
})