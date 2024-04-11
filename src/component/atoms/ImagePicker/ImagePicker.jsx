import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, fonts, fontScale, fontSizes } from '../../../Globals'

const ImagePicker = ({
    label = 'Add Photo',
    containerStyle,
    pickerStyle,
    labelStyle,
    imgSrc,
    ...props
}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} {...props}>
            <View style={[styles.container, containerStyle]}>
                <View style={[styles.picker, pickerStyle]}>
                    <Text style={[styles.label, labelStyle]}>{label}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ImagePicker

const styles = StyleSheet.create({
    container: {
        width: 110,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderRadius: 100,
        borderColor: colors.secondary,
        padding: 6
    },
    picker: {
        backgroundColor: colors.neutralLight,
        flex: 1,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 10
    },
    label: {
        fontSize: fontSizes.paragraph,
        textAlign: 'center'
    }
})