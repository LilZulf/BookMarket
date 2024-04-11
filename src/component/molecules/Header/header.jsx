import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts, fontSizes } from '../../../Globals'
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from '../../atoms';

const Header = ({
  title,
  subtitle,
  onBackPress,
  profilePic,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContent}>
        {onBackPress &&
          <TouchableOpacity activeOpacity={0.7} onPress={onBackPress}>
            <Icon name="chevron-back-outline" size={24} style={styles.icon} />
          </TouchableOpacity>
        }
        <View>
          <Text style={styles.title} >{title}</Text>
          <Text style={styles.subTitle} >{subtitle}</Text>
        </View>
      </View>
      {profilePic && <Image style={styles.profilePic} source={profilePic}/>}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  title: {
    fontSize: fontSizes.heading2,
    fontFamily: fonts.medium,
    color: colors.fontBlack,
  },
  subTitle: {
    fontSize: fontSizes.paragraph,
    fontFamily: fonts.primary,
    color: colors.secondary
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  subContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    marginEnd: 26,
    color: colors.fontBlackl
  },
  profilePic: {
    width: 60,
    height: 60,
  }
})