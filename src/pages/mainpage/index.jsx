import React from 'react'
import { StyleSheet, View } from 'react-native'
import { DummyBook, DummyBook2, DummyBook3 } from '../../assets'
import { Card, CardContainer, Header, Spacer, TabView } from '../../component'

const MainPage = ({ navigation }) => {
  const books = [
    {
      title: 'Rich Dad Poor Dad',
      rating: '4.5',
      image: DummyBook2
    },
    {
      title: 'Filosofi Teras',
      rating: '5',
      image: DummyBook3
    },
    {
      title: `Shopie's World`,
      rating: '4.4',
      image: DummyBook
    },
  ]
  return (
    <>
      <Header
        title={'BookMarket'}
        subtitle={'What you wanna read?'}
        profilePic={require('../../assets/dummy/dummypic.png')}
      />
      <View style={styles.container}>
        <CardContainer>
          {books.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              rating={item.rating}
              image={item.image}
            />
          ))}
          <Spacer widht={24} />
        </CardContainer>
        <View style={styles.tabContainer}>
          <TabView />
        </View>
      </View>
    </>
  )
}

export default MainPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer : {
    flex : 1
  }
})