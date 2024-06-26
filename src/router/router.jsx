import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BottomNavigator } from '../component';
import { AddressPage, MainPage, OrderPage, ProfilePage, DetailsPage } from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name='Main' component={MainPage} options={{ headerShown: false }} />
            <Tab.Screen name='Order' component={OrderPage} options={{ headerShown: false }} />
            <Tab.Screen name='Profile' component={ProfilePage} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="AddressPage" component={AddressPage} options={{ headerShown: false }} />
            <Stack.Screen name="SignUpSuccess" component={SignUpSuccess} options={{ headerShown: false }} /> */}
            {/* <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} /> */}
            <Stack.Screen name="DetailsPage" component={DetailsPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router;