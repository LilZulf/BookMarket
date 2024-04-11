import { Alert, StyleSheet, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React from 'react'
import { Header, TextInput, Button, Spacer, KeyboardContainer, ImagePicker } from '../../component'

const SignUp = ({
    navigation
}) => {
    return (
        <View style={styles.page}>
            <Header onBackPress={() => navigation.goBack()} title={'Sign Up'} subtitle={`Let's become the books enthusiast!`} />
            <KeyboardContainer style={styles.keyboardContainer} >
                <View style={styles.container}>
                    <View style={styles.photoContainer}>
                        <ImagePicker />
                    </View>
                    <TextInput label={'Full name'} placeholder='Type your full name' />
                    <Spacer widht={'100%'} height={16} />
                    <TextInput label={'Email address'} placeholder='Type your email address' />
                    <Spacer widht={'100%'} height={16} />
                    <TextInput label={'Password'} placeholder='Type your password' />
                    <Spacer widht={'100%'} height={24} />
                    <Button onPress={() => navigation.navigate('AddressPage')} text='Continue' />
                </View>
            </KeyboardContainer>
        </View>


    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        flex: 1,
        justifyContent: 'center',
    },
    page: {
        flex: 1
    },
    keyboardContainer: {
        flex: 1,
        marginTop: 24
    },
    photoContainer: {
        alignItems: 'center',
        marginVertical: 20
    }
})