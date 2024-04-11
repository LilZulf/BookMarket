import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fontSizes, fonts } from '../../../Globals'

const Button = ({
    text = 'Button',
    containerStyle,
    textStyle,
    variant = 'primary',
    onPress
}) => {
    const containerVariant = {
        primary: styles.primary,
        secondary: styles.secondary,
    }[variant]
    const textVariant = {
        primary: styles.textPrimary,
        secondary: styles.textSecondary
    }[variant]

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <View style={[styles.container, containerVariant, containerStyle]}>
                <Text style={[styles.text, textVariant, textStyle]}>{text}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 8
    },
    text: {
        fontSize: fontSizes.paragraph,
        fontFamily: fonts.medium,
    },
    textPrimary: {
        color: colors.fontBlack
    },
    textSecondary: {
        color: colors.white
    },
    primary: {
        backgroundColor: colors.primary,
    },
    secondary: {
        backgroundColor: colors.secondary,
    }
})