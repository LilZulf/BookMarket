import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts, fontSizes } from '../../../Globals'
import { Star, StarOff } from '../../../assets/Icon'
import { Image } from '../../atoms'
import { DummyBook } from '../../../assets/dummy'

const Card = ({
    title,
    rating = '4.5',
    image = DummyBook
}) => {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer} >
                <Image
                    style={styles.image}
                    source={image}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.rate}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <StarOff />
                    <Text style={styles.rateText}>{rating}</Text>
                </View>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        marginStart: 24,
        height: 210,
        width: 200,
        borderRadius: 12,
        backgroundColor: colors.white,
        shadowOpacity: 0.2,
        shadowRadius: 12,
        // Elevation for Android
        elevation: 10,
        marginVertical: 24,
        overflow: 'hidden'
    },
    imageContainer: {
        height: 140,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        resizeMode : 'cover'
    },
    content: {
        paddingHorizontal: 10,
        paddingVertical: 15,

    },
    title: {
        fontFamily: fonts.primary,
        color: colors.fontBlack,
        fontSize: fontSizes.paragraph,
        marginBottom: 5
    },
    rate: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rateText: {
        marginStart: 10
    }
});