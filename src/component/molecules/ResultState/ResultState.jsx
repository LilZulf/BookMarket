import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts, fontSizes } from '../../../Globals'
import { Button, Spacer } from '../../atoms'

const ResultState = ({
    title,
    subtitle,
    children,
    buttonText,
    buttonContainer,
    onPressButton
}) => {
    return (
        <View style={styles.container}>
            {children}
            <Spacer height={5} />
            <Text style={styles.title}>{title}</Text>
            <Spacer height={5} />
            <Text styles={styles.subtitle}>{subtitle}</Text>
            <Spacer height={30} />
            <View style={[styles.buttonContainer, buttonContainer]}>
                <Button
                    text={buttonText}
                    onPress={onPressButton}
                />
            </View>
        </View>
    )
}

export default ResultState

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white
    },
    title: {
        fontFamily: fonts.medium,
        color: colors.fontBlack,
        fontSize: fontSizes.heading3,
    },
    subtitle: {
        fontFamily: fonts.primary,
        color: colors.neutralLight,
    },
    buttonContainer: {
        width: '50%'
    }
})