import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import SignUp from './screens/SignUp'
import { appColor } from './constants/constants'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screens/Login'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={{flex:1,backgroundColor: appColor}}>
      <StatusBar backgroundColor={appColor} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Signup' component={SignUp} options={{headerShown:false}} />
          <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App