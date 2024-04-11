import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const ListContainer = ({
    children,
    ...props
}) => {
    return (
        <View
            style={styles.content}
            {...props}
        >
            {children}
        </View>
    )
}

export default ListContainer

const styles = StyleSheet.create({
    content: {
        flex: 1
    },
})