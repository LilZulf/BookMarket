import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../../Globals';


const CardContainer = ({ containerStyle, children, dataSource, ...props }) => {
    return (
        <ScrollView
            horizontal={true}
            style={styles.cardContainer}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer} 
            {...props}
        >
            <>
                {children}
            </>
        </ScrollView>
    );
}

export default CardContainer;

const styles = StyleSheet.create({
    cardContainer: {
        flexGrow: 0,
    },
    contentContainer: {
        // Align content to the center horizontally
        alignItems: 'center',
    },
});
