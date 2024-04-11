import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TabView as RNTabView, SceneMap } from 'react-native-tab-view';
import renderTabBar from './TabBar';
import { TabPage } from '../../../pages';

const renderScene = SceneMap({
  1: TabPage,
  2: TabPage,
  3: TabPage,
});

const TabView = ({...props}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: '1', title: 'New Release' },
    { key: '2', title: 'Popular' },
    { key: '3', title: 'Recommendations' },
  ]);
  return (
    <RNTabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: '100%' }}
      renderTabBar={renderTabBar}
      {...props}
    />
  )
}

export default TabView

const styles = StyleSheet.create({})