import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.title}>Elevated Cards</Text>
      <ScrollView horizontal style={{marginRight: 10}}>
        <View style={styles.card}>
          <Text>Slide 🎚</Text>
        </View>
        <View style={styles.card}>
          <Text>Me</Text>
        </View>
        <View style={styles.card}>
          <Text>To</Text>
        </View>
        <View style={styles.card}>
          <Text>View 👁</Text>
        </View>
        <View style={styles.card}>
          <Text>More</Text>
        </View>
        <View style={styles.card}>
          <Text>Content 😘</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 5,
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: '#4D869C',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
