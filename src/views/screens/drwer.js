import { View, Text, StyleSheet,Image} from 'react-native'
import React ,{useLayoutEffect}from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import COLORS from '../../consts/colors';
import BottomNavigator from '../navigation/BottomNavigator';
import MasginScreen from '../components/masginScreen';
import ProfeilScreen from '../components/profeilScreen';
import SittingScreen from '../components/SittingScreen';
import CastomDrawer from '../components/CastomDrawer';

const Drawe=createDrawerNavigator();
const DraweNavigator = () => {
    return (
        <Drawe.Navigator drawerContent={props=><CastomDrawer{...props}/>} screenOptions={{
            headerShown:true,drawerActiveBackgroundColor:'#FD1C03',drawerInactiveTintColor:COLORS.dark,drawerLabelStyle:{marginLeft:-25,fontSize:15}}} >
          <Drawe.Screen name="Home" component={BottomNavigator} options={{
            drawerIcon:({color})=>(<Image source={require('../../assets/home.png')} style={styles.img}/>)}} />
          <Drawe.Screen name="masgin" component={MasginScreen} options={{
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