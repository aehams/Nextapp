import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from '../navigation/BottomNavigator';
import masginScreen from './masginScreen';
import ProfeilScreen from './profeilScreen';
import SittingScreen from './SittingScreen';
import CastomDrawer from '../viewDrwer/CastomDrawer';
import COLORS from '../../consts/colors';

const Drawe=createDrawerNavigator();
const Stack=createNativeStackNavigator();

const DraweNavigator = () => {
    return (
        <Drawe.Navigator drawerContent={props=><CastomDrawer{...props}/>} screenOptions={{
            headerShown:true,drawerActiveBackgroundColor:'#FD1C03',drawerInactiveTintColor:COLORS.dark,drawerLabelStyle:{marginLeft:-25,fontSize:15}}} >
          <Drawe.Screen name="Home" component={BottomNavigator} options={{
            drawerIcon:({color})=>(<Image source={require('../../assets/home.png')} style={styles.img}/>)}} />
          <Drawe.Screen name="masgin" component={masginScreen} options={{
            drawerIcon:({color})=>(<Image source={require('../../assets/home.png')} style={styles.img}/>)}} />
          <Drawe.Screen name="Profeil" component={ProfeilScreen} options={{
            drawerIcon:({color})=>(<Image source={require('../../assets/home.png')} style={styles.img}/>)}} />
          <Drawe.Screen name="Sitting" component={SittingScreen}  options={{
            drawerIcon:({color})=>(<Image source={require('../../assets/home.png')} style={styles.img}/>)}}/>
        </Drawe.Navigator>

    );
}

const styles = StyleSheet.create({
    img:{
        width:30,
        height:14,
    }
})

export default DraweNavigator;
