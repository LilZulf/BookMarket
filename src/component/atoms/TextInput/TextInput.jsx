import { StyleSheet, Text, View, TextInput as RNTextInput } from 'react-native'
import React from 'react'
import { colors, fontSizes, fonts } from '../../../Globals'

const TextInput = ({
    label,
    placeholder = 'some text'
}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <RNTextInput style={styles.input} placeholder={placeholder} />
        </View>
    )
}

export default TextInput

const styles = StyleSheet.create({
    label: {
        fontSize: fontSizes.label,
        fontFamily: fonts.primary,
        color: colors.fontBlack,
        marginBottom: 5
    },
    input: {
        borderColor: colors.fontBlack,
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 10,
        fontSize: fontSizes.paragraph
    }
})