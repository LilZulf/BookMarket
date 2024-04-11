import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Header, TextInput, Button, Spacer } from '../../component'

const SignIn = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title={'Sign In'} subtitle={'Welcome to the club!'} />
            <View style={styles.container}>
                <TextInput label={'Email address'} placeholder='Type your email address' />
                <Spacer widht={'100%'} height={16}/>
                <TextInput label={'Password'} placeholder='Type your password' />
                <Spacer widht={'100%'} height={24}/>
                <Button text='Sign In'/>
                <Spacer widht={'100%'} height={16}/>
                <Button onPress={() => navigation.navigate('SignUp')} text='Create New Account' variant='secondary'/>
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        paddingHorizontal : 24,
        paddingVertical: 26,
        marginTop : 24,
        flex : 1
    },
    page : {
        flex : 1
    }
})