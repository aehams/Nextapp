import 'react-native-gesture-handler';
import React,{useLayoutEffect}from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {Image, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import SearchFood from '../../SarchBotom/SearchFood';

const Tab = createBottomTabNavigator();

const BottomNavigator = ({navigation}) => {
  useLayoutEffect(()=>{
    navigation.setOptions({
    headerShown : false,
    })
  },[])
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle:{backgroundColor:COLORS.reed , borderTopWidth:0 },
        tabBarInactiveTintColor:'#fff',
        tabBarActiveTintColor:COLORS.dark,
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: COLORS.reed,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={require('../../assets/home.png')} style={{height:60,width:60}}/>
          ),
        }}
      />
      <Tab.Screen
        name="LocalMall"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={require('../../assets/shop.png')} style={{height:40,width:40}}/>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchFood}
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                borderColor: COLORS.reed,
                borderWidth: 2,
                borderRadius: 30,
                top: -25,
                elevation: 5,
              }}>
              <Image source={require('../../assets/lookfor.png')}/>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={require('../../assets/love.png')}/>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarBadge:4,
          tabBarBadgeStyle:{backgroundColor:'yellow',width:20,height:20},
          tabBarIcon: ({color}) => (
            <Image source={require('../../assets/cart.png')}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;