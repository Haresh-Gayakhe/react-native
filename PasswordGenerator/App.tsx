import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Children, useState} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import BouncyCheckBox from 'react-native-bouncy-checkbox';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(6, 'minimum length is 6')
    .max(16, 'maximum length is 16')
    .required('length is required'),
});

const App = () => {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePassword = (passwordLength: number) => {
    let charString = '';
    if (lowerCase) {
      charString += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (upperCase) {
      charString += 'ABCDEFGHIJIKLMNOPQRSTUVWXYZ';
    }
    if (numbers) {
      charString += '1234567890';
    }
    if (symbols) {
      charString += '!@#$%^&*_+';
    }

    const password = createPassword(charString, passwordLength);
    setPassword(password);
    setIsPassGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      let charIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(charIndex);
    }
    return result;
  };

  const resetPassword = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor: '#212121', flex: 1}}>
      <SafeAreaView>
        <View>
          <Text style={styles.appName}>Password Generator</Text>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={passwordSchema}
            onSubmit={values => {
              console.log(values);
              generatePassword(+values.passwordLength);
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
              isSubmitting,
              /* and other goodies */
            }) => (
              <View style={styles.container}>
                <View style={styles.inputRow}>
                  <View>
                    <Text style={styles.inputLabel}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorMsg}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.textInput}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    keyboardType="numeric"
                    placeholder="EX. 8"
                    placeholderTextColor='white'
                  />
                </View>
                <View style={styles.inputRow}>
                  <Text style={styles.inputLabel}>Include lowerCase</Text>
                  <BouncyCheckBox
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor="green"
                  />
                </View>
                <View style={styles.inputRow}>
                  <Text style={styles.inputLabel}>Include upperCase</Text>
                  <BouncyCheckBox
                    isChecked={upperCase}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor="red"
                  />
                </View>
                <View style={styles.inputRow}>
                  <Text style={styles.inputLabel}>Include numbers</Text>
                  <BouncyCheckBox
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="blue"
                  />
                </View>
                <View style={styles.inputRow}>
                  <Text style={styles.inputLabel}>Include symbols</Text>
                  <BouncyCheckBox
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="black"
                  />
                </View>

                <View style={styles.btnContainer}>
                  <TouchableOpacity
                    style={[styles.btn, {backgroundColor: 'blue'}]}
                    disabled={!isValid}
                    onPress={() => {
                      handleSubmit();
                    }}>
                    <Text style={styles.btnText}>Generate</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.btn, {backgroundColor: 'red'}]}
                    onPress={() => {
                      handleReset();
                      resetPassword();
                    }}>
                    <Text style={styles.btnText}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
        {isPassGenerated ? (
          <View style={styles.passContainer}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              Long press to copy
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                paddingTop: 10,
              }}
              selectable>
              {password}
            </Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
  },
  appName: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    paddingVertical: 10,
    color: 'white',
  },
  inputLabel: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  errorMsg: {
    color: 'red',
    fontSize: 15,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 7,
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'white',
    width: 70,
    color:'white'
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 30,
  },
  btn: {
    paddingVertical: 15,
    width: 100,
    alignItems: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  passContainer: {
    height: 150,
    width: 350,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
