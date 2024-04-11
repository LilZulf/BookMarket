import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts, fontSizes } from '../../../Globals'
import { DummyBook, Star, StarOff } from '../../../assets'
import { Image } from '../../atoms'

const ListItem = () => {
    return (
        <View style={styles.item}>
            <View style={styles.detail}>
                <Image
                    source={DummyBook}
                    style={styles.image}
                />
                <View>
                    <Text style={styles.title}>Sophie's World</Text>
                    <Text style={styles.subtitle}>IDR 120.000</Text>
                </View>
            </View>
            <View style={styles.rate}>
                <Star />
                <Star />
                <Star />
                <Star />
                <StarOff />
                <Text style={styles.rateText}>4.5</Text>
            </View>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginEnd: 10
    },
    detail: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontFamily: fonts.medium,
        fontSizes: fontSizes.paragraph,
        color: colors.fontBlack
    },
    subtitle: {
        fontFamily: fonts.primary,
        fontSize: fontSizes.label,
    },
    rate: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rateText: {
        marginStart: 10
    }
})