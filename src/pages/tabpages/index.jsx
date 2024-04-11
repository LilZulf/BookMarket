import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { colors } from '../../Globals'
import { ListContainer, ListItem, Spacer } from '../../component'


const TabPage = ({ }) => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Spacer height={24} />
                <ListContainer>
                    <ListItem/>
                </ListContainer>
            <Spacer height={24} />
        </ScrollView>
    )
}

export default TabPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: colors.white
    },
   
})