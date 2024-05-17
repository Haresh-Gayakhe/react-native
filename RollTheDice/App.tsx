import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import RNReactNativeHapticFeedback from 'react-native-haptic-feedback'; //package for haptic feedback

import One from './assets/One.png';
import Two from './assets/Two.png';
import Three from './assets/Three.png';
import Four from './assets/Four.png';
import Five from './assets/Five.png';
import Six from './assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProps) => {
  return (
    <View>
      <Image source={imageUrl} style={styles.image} />
    </View>
  );
};

const App = () => {
  const [image, setImage] = useState<ImageSourcePropType>(One);

  const changeImage = () => {

    //haptic feedback trrigres here
    RNReactNativeHapticFeedback.trigger('effectDoubleClick');

    let image = Math.round(Math.random() * 6);
    switch (image) {
      case 1:
        setImage(One);
        break;
      case 2:
        setImage(Two);
        break;
      case 3:
        setImage(Three);
        break;
      case 4:
        setImage(Four);
        break;
      case 5:
        setImage(Five);
        break;
      case 6:
        setImage(Six);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={image} />
      <TouchableOpacity style={styles.btn} onPress={changeImage}>
        <Text style={styles.btnText}>Roll Dice</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'purple',
    width: 200,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
