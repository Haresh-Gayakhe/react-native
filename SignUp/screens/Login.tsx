import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {appColor} from '../constants/constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {TextInput} from 'react-native-paper';
import {NavigationProp} from '@react-navigation/native';

const loginValidation = Yup.object().shape({
  userName: Yup.string().required('userName is required'),
  password: Yup.string().required('Password is required'),
});

const Login = ({navigation}: {navigation: NavigationProp<any>}) => {
  return (
    <ScrollView style={{backgroundColor: appColor}}>
      <View style={styles.appName}>
        <Text style={styles.appNameText}>Coffee Cozy</Text>
      </View>
      <Text style={styles.login}>LOG IN</Text>
      <Text style={styles.loginText}>Enter your user name and password</Text>
      <Formik
        initialValues={{userName: '', password: ''}}
        validationSchema={loginValidation}
        onSubmit={values => {
          console.log(values);
        }}>
        {({
          values,
          errors,
          touched,
          isValid,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <View>
            <TextInput
              style={styles.input}
              value={values.userName}
              onChangeText={handleChange('userName')}
              placeholder="Enter your userName"
              placeholderTextColor={'black'}
            />
            <TextInput
              style={styles.input}
              value={values.password}
              onChangeText={handleChange('password')}
              placeholder="Enter your password"
              placeholderTextColor={'black'}
            />
            <Text style={styles.resetPassText}>Reset your password</Text>

            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.goToSignup}
              onPress={() => {
                navigation.navigate('Signup');
              }}>
              <Text style={styles.goToSignupText}>
                Having no Account Tap Here
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  appName: {
    marginHorizontal: wp(10),
    marginTop: hp(5),
  },
  appNameText: {
    fontWeight: 'bold',
    fontSize: hp(2),
    color: 'black',
  },
  input: {
    alignSelf: 'center',
    borderWidth: 2,
    width: wp(70),
    height: hp(6),
    borderRadius: 10,
    textAlign: 'center',
    fontSize: hp(2),
    marginTop: hp(3),
    backgroundColor: appColor,
  },
  resetPassText: {
    fontSize: hp(1.5),
    color: 'black',
    alignSelf: 'flex-end',
    marginRight: wp(15),
    marginVertical: hp(2),
  },
  btn: {
    alignSelf: 'center',
    width: wp(70),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#401c04',
    borderRadius: 10,
    marginTop: hp(2),
  },
  btnText: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    color: appColor,
  },
  login: {
    fontWeight: 'bold',
    fontSize: hp(3),
    color: 'black',
    marginLeft: wp(15),
    marginTop: hp(10),
  },
  loginText: {
    fontWeight: 'bold',
    color: '#212121',
    marginLeft: wp(15),
  },
  goToSignup: {
    alignSelf: 'flex-end',
    marginRight: wp(15),
    marginVertical: hp(1),
  },
  goToSignupText: {
    fontSize: hp(1.5),
    textDecorationLine: 'underline',
    color: 'black',
  },
});
