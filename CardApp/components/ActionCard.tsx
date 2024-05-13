import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWeb(url: string) {
    Linking.openURL(url);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Blog Card</Text>
      <View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/19906679/pexels-photo-19906679/free-photo-of-snow-covered-steep-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
          }}
          style={styles.image}
        />
        <Text style={styles.description} numberOfLines={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          asperiores, id iusto aperiam vitae saepe exercitationem, nemo at
          laborum, nobis rerum voluptatum cupiditate? Molestiae praesentium, est
          architecto accusantium vitae voluptatum quas hic eius cupiditate!
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              openWeb(
                'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
              );
            }}>
            <Text>Follow Me</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              openWeb(
                'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
              );
            }}>
            <Text>Share This</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  container: {
    backgroundColor: 'orange',
    width: '90%',
    marginHorizontal: 'auto',
    marginVertical: 10,
    borderRadius: 5,
  },
  image: {
    width: 340,
    height: 250,
    alignSelf: 'center',
    borderRadius: 5,
  },
  description: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 20,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
