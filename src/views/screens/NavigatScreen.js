import React, { useContext } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardScreen from './OnBoardScreen';
import DetailsScreen from './DetailsScreen';
import SignOut from '../navigation/Sign Out';
import Register from '../navigation/Register';
import DraweNavigator from '../viewDrwer/drwer';
import LodingScreenIn from './LodingScreenIn';


const NavigatScreen = () => {
    const Stack=createNativeStackNavigator();
    const [isLoading,setIsLoading]=React.useState(true);
  
    const Load=()=>LodingScreenIn(setIsLoading)
  
    
    return (

          <Stack.Navigator screenOptions={{headerShown:false}} >

            {isLoading?<Stack.Screen name="LodingScreen" component={Load}/>
              :<Stack.Screen name="Drawe" component={DraweNavigator}/>
            }
            
            <Stack.Screen name='BoarfScreen' component={OnBoardScreen}/>
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
            <Stack.Screen name="SingOut" component={SignOut}/>
            <Stack.Screen name='Register' component={Register}/> 

          </Stack.Navigator>
    )
}


export default NavigatScreen;
