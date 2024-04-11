import { StyleSheet, View, } from 'react-native'
import React, { useState } from 'react'
import { Header, TextInput, Button, Spacer, KeyboardContainer, DropDown } from '../../component'


const AddressPage = ({
    navigation
}) => {
    const [province, setProvince] = useState(null);
    const [cities, setCities] = useState(null);

    const citiesItems = [
        { label: 'Malang', value: 'Malang' },
        { label: 'Surabaya', value: 'Surabaya' },
        { label: 'Jakarta', value: 'Jakarta' },
        { label: 'Bandung', value: 'Bandung' },
        { label: 'Yogyakarta', value: 'Yogyakarta' },
        { label: 'Semarang', value: 'Semarang' },
        { label: 'Medan', value: 'Medan' },
        { label: 'Palembang', value: 'Palembang' },
        { label: 'Makassar', value: 'Makassar' },
        { label: 'Bali', value: 'Bali' },
        { label: 'Bogor', value: 'Bogor' },
        { label: 'Depok', value: 'Depok' },
        { label: 'Tangerang', value: 'Tangerang' },
        { label: 'Batam', value: 'Batam' },
        { label: 'Balikpapan', value: 'Balikpapan' },
        { label: 'Pontianak', value: 'Pontianak' },
        { label: 'Padang', value: 'Padang' },
        { label: 'Manado', value: 'Manado' },
        { label: 'Banjarmasin', value: 'Banjarmasin' },
        { label: 'Ambon', value: 'Ambon' },
    ];
    const provinceItems = [
        { label: 'Aceh', value: 'Aceh' },
        { label: 'Banda Aceh', value: 'Banda Aceh' },
        { label: 'Medan', value: 'Medan' },
        { label: 'North Sumatra', value: 'North Sumatra' },
        { label: 'West Sumatra', value: 'West Sumatra' },
        { label: 'South Sumatra', value: 'South Sumatra' },
        { label: 'Pekanbaru', value: 'Pekanbaru' },
        { label: 'Riau', value: 'Riau' },
        { label: 'Batam', value: 'Batam' },
        { label: 'Riau Islands', value: 'Riau Islands' },
        { label: 'Jambi', value: 'Jambi' },
        { label: 'Lampung', value: 'Lampung' },
        { label: 'Palembang', value: 'Palembang' },
        { label: 'Bengkulu', value: 'Bengkulu' },
        { label: 'Bangka Belitung', value: 'Bangka Belitung' },
        { label: 'Pontianak', value: 'Pontianak' },
        { label: 'West Kalimantan', value: 'West Kalimantan' },
        { label: 'Banjarmasin', value: 'Banjarmasin' },
        { label: 'South Kalimantan', value: 'South Kalimantan' },
        { label: 'Palangkaraya', value: 'Palangkaraya' },
        { label: 'Central Kalimantan', value: 'Central Kalimantan' },
        { label: 'Samarinda', value: 'Samarinda' },
        { label: 'East Kalimantan', value: 'East Kalimantan' },
        { label: 'Makassar', value: 'Makassar' },
        { label: 'South Sulawesi', value: 'South Sulawesi' },
        { label: 'Manado', value: 'Manado' },
        { label: 'North Sulawesi', value: 'North Sulawesi' },
        { label: 'Gorontalo', value: 'Gorontalo' },
        { label: 'Palu', value: 'Palu' },
        { label: 'Central Sulawesi', value: 'Central Sulawesi' },
        { label: 'Kendari', value: 'Kendari' },
        { label: 'Southeast Sulawesi', value: 'Southeast Sulawesi' },
        { label: 'Ambon', value: 'Ambon' },
        { label: 'Maluku', value: 'Maluku' },
        { label: 'Ternate', value: 'Ternate' },
        { label: 'North Maluku', value: 'North Maluku' },
        { label: 'Jayapura', value: 'Jayapura' },
        { label: 'Papua', value: 'Papua' },
        { label: 'Merauke', value: 'Merauke' },
        { label: 'West Papua', value: 'West Papua' }
    ];



    return (
        <View style={styles.page}>
            <Header onBackPress={() => navigation.goBack()} title={'Address'} subtitle={`Make sure it's valid`} />
            <KeyboardContainer style={styles.keyboardContainer} >
                <View style={styles.container}>
                    <TextInput label={'Phone No.'} placeholder='Type your phone number' />
                    <Spacer widht={'100%'} height={16} />
                    <TextInput label={'Address'} placeholder='Type your address' />
                    <Spacer widht={'100%'} height={16} />
                    <DropDown
                        label="Province"
                        placeholder="Select your province"
                        items={provinceItems}
                        value={province}
                        onSelectItem={(item) => {
                            setProvince(item.value)
                        }}
                    />

                    <Spacer widht={'100%'} height={24} />
                    <DropDown
                        label="City"
                        placeholder="Select your city"
                        items={citiesItems}
                        value={cities}
                        onSelectItem={(item) => {
                            setCities(item.value)
                        }}
                    />
                    <Spacer widht={'100%'} height={16} />
                    <Spacer widht={'100%'} height={24} />
                    <Button onPress={() => navigation.replace('SignUpSuccess')} text='Sign Up' />
                </View>
            </KeyboardContainer>
        </View>
    )
}

export default AddressPage

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        flex: 1,
        justifyContent: 'center',
    },
    page: {
        flex: 1
    },
    keyboardContainer: {
        flex: 1,
        marginTop: 24
    },
})