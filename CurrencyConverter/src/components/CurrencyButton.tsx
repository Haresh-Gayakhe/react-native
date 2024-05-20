import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

type currencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencyButton = (props: currencyButtonProps): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  );
};

export default CurrencyButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  flag: {
    fontSize: 28,
    color: 'white',
    marginBottom: 4,
  },
  country: {
    fontSize: 14,
    color: '#2D3436',
  },
});
