import { StyleSheet, Text, View, Image as RNImage } from 'react-native'
import React from 'react'

const Image = ({
    imageStyle,
    ...props
}) => {
    return (
        <>
            <RNImage
                style={[styles.image, imageStyle]}
                {...props}
            />
        </>
    )
}

export default Image

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
    }
})