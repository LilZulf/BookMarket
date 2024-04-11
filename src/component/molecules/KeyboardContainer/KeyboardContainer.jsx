import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'

const KeyboardContainer = ({ children, scviewBg = 'white', ...props }) => {
    return (
        <KeyboardAvoidingView {...props}>
            <ScrollView style={{ backgroundColor: scviewBg }} showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default KeyboardContainer

const styles = StyleSheet.create({

})