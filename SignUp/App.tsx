import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import SignUp from './screens/SignUp'
import { appColor } from './constants/constants'

const App = () => {
  return (
    <View style={{flex:1,backgroundColor: appColor}}>
      <StatusBar backgroundColor={appColor} />
      <SignUp />
    </View>
  )
}

export default App