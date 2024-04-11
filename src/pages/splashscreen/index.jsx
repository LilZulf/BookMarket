import React, { useEffect } from 'react'
import { Text, View, } from 'react-native'
import { Logo } from '../../assets'

export const SplashScreen = ({navigation}) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.replace('SignIn')
      }, 2000);
    }, [])
    
    return (
        <View style={{ backgroundColor: '#6FCF97', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Logo />
            <View style={{ height: 32 }}></View>
            <Text
                style={{ fontSize: 32, color: '#020202', fontFamily: 'Inter-Medium' }}>
                Book Mart</Text>
            <Text>

            </Text>
        </View>
    )
}
