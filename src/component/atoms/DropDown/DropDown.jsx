import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import PropTypes from 'prop-types';
import { colors, fontSizes, fonts } from '../../../Globals'

const DropDown = ({
    label = 'Label',
    placeholder = 'Select an item',
    items = [],
    value,
    onChange,
    labelStyle,
    dropdownStyle,
    ...props
}) => {
    const [open, setOpen] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={[styles.label, labelStyle]}>
                {label}
            </Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={onChange}
                listMode="MODAL"
                searchable={false}
                modalAnimationType="fade"
                placeholder={placeholder}
                containerStyle={styles.dropdownContainer}
                style={[styles.dropdown, dropdownStyle]}
                {...props}
            />
        </View>
    );
};

DropDown.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    items: PropTypes.array,
    value: PropTypes.any,
    onChange: PropTypes.func,
    labelStyle: PropTypes.object,
    dropdownStyle: PropTypes.object,
};

const styles = StyleSheet.create({
    label: {
        fontSize: fontSizes.label,
        fontFamily: fonts.primary,
        color: colors.fontBlack,
        marginBottom: 5
    },
    dropdownContainer: {
        height: 40,
    },
    dropdown: {
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 10,
        fontSize: 16,
    },
});

export default DropDown;
