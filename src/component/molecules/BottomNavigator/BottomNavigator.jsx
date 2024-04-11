import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Cart, CartOff, Home, HomeOff, User, UserOff } from '../../../assets/Icon';
import { colors } from '../../../Globals';

const Icon = ({ label, focus }) => {
    switch (label) {
        case 'Main':
            return focus ? <Home /> : <HomeOff />
        case 'Order':
            return focus ? <Cart /> : <CartOff />
        case 'Profile':
            return focus ? <User /> : <UserOff />
        default:
            return <HomeOff />
    }
}

const BottomNavigator = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const isFocused = state.index === index;
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        activeOpacity={0.8}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.itemContainer}
                    >
                        <Icon
                            label={label}
                            focus={isFocused}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default BottomNavigator

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        paddingTop: 15,
        paddingBottom: 13,
        paddingHorizontal: 20
    },
    itemContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})