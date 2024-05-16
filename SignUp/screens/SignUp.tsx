import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {appColor} from '../constants/constants';
import {NavigationProp} from '@react-navigation/native';

const Validation = Yup.object().shape({
  email: Yup.string().email('Enter Valid mail').required('Email is required'),
  userName: Yup.string().required('Username is required'),
  password: Yup.string()
    .min(6, 'length must be 6 or greater')
    .required('Password is Required'),
  confirmPassword: Yup.string()
    .required('Confrim password is required')
    .oneOf([Yup.ref('password')], 'Password must be matched'),
});

const SignUp = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    console.log(isChecked); // Log the updated value of isChecked whenever it changes
  }, [isChecked]);

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor: appColor}}>
      <View style={styles.appName}>
        <Text style={styles.appNameText}>Coffee Cozy</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.createAccount}>Create Account</Text>
        <Text style={{fontWeight: 'bold', color: '#212121'}}>
          Create an account to drink a cup of Happiness
        </Text>
      </View>
      <Formik
        initialValues={{
          email: '',
          userName: '',
          confirmPassword: '',
          password: '',
        }}
        validationSchema={Validation}
        onSubmit={values => {
          console.log('second');
          console.log(values);
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          isValid,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <View>
            <TextInput
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFocusedField(null)}
              onFocus={() => setFocusedField('email')}
              placeholder="Enter your Email"
              placeholderTextColor={'black'}
              style={styles.input}
            />
            {touched.email && errors.email && <Text>{errors.email}</Text>}

            <TextInput
              value={values.userName}
              onChangeText={handleChange('userName')}
              onBlur={() => setFocusedField(null)}
              onFocus={() => setFocusedField('userName')}
              placeholder="Enter your Username"
              placeholderTextColor={'black'}
              style={styles.input}
            />
            {focusedField == 'userName' &&
              touched.userName &&
              errors.userName && <Text>{errors.userName}</Text>}
            <TextInput
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={() => setFocusedField(null)}
              onFocus={() => setFocusedField('password')}
              placeholder="Enter your Password"
              placeholderTextColor={'black'}
              style={styles.input}
            />
            {focusedField == 'password' &&
              touched.password &&
              errors.password && <Text>{errors.password}</Text>}
            <TextInput
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              onBlur={() => setFocusedField(null)}
              onFocus={() => setFocusedField('confirmPassword')}
              placeholder="Confirm Password"
              placeholderTextColor={'black'}
              style={styles.input}
            />
            {focusedField == 'confirmPassword' &&
              touched.confirmPassword &&
              errors.confirmPassword && <Text>{errors.confirmPassword}</Text>}
            <View
              style={{
                width: wp(65),
                flexDirection: 'row',
                alignSelf: 'center',
                justifyContent: 'space-between',
                marginVertical: hp(2),
              }}>
              <TouchableOpacity
                style={[
                  styles.checkBox,
                  {backgroundColor: isChecked ? 'green' : 'transparent'},
                ]}
                onPress={() => setIsChecked(!isChecked)}
              />
              <Text style={styles.terms}>
                You agree with our cup of terms and conditions
              </Text>
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                console.log('here');
                handleSubmit();
              }}>
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.goToLogin}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.goToLoginText}>Having an Account</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default SignUp;

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
  formContainer: {
    alignItems: 'center',
    marginTop: hp(8),
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
  createAccount: {
    fontWeight: 'bold',
    fontSize: hp(3),
    color: 'black',
  },
  checkBox: {
    width: hp(2),
    height: hp(2),
    borderWidth: 1,
    borderRadius: 3,
  },
  terms: {
    fontSize: hp(1.5),
    color: 'black',
  },
  goToLogin: {
    alignSelf: 'flex-end',
    marginRight: wp(15),
    marginVertical: hp(1),
  },
  goToLoginText: {
    fontSize: hp(1.5),
    textDecorationLine: 'underline',
    color: 'black',
  },
});
