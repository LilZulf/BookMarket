import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ResultState } from '../../component'
import { SignInUp } from '../../assets'

const SignUpSuccess = ({ navigation }) => {
    return (
        <>
            <ResultState
                title={'Congratulations!'}
                subtitle={'Your book lover journey begin'}
                buttonText={`Get Started`}
                onPressButton={() => navigation.replace('MainApp')}
            >
                <SignInUp
                    width={300}
                    height={300}
                />
            </ResultState>
        </>
    )
}

export default SignUpSuccess

const styles = StyleSheet.create({})