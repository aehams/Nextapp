import React, { useContext } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import BottomNavigator from './src/views/navigation/BottomNavigator';
import DetailsScreen from './src/views/screens/DetailsScreen';
import SignOut from './src/views/navigation/Sign Out';
import Register from './src/views/navigation/Register';
import DraweNavigator from './src/views/screens/drwer';
import AuthContecxt from './src/views/components/AuthContecxt';
import {View,ActivityIndicator} from 'react-native';
import LodingScreenIn from './src/views/screens/LodingScreenIn';
import HomeScreen from './src/views/screens/HomeScreen';


const App=()=> {
  const Stack=createNativeStackNavigator();
  const [isLoading,setIsLoading]=React.useState(true);

  const Load=()=>LodingScreenIn(setIsLoading)

  return (
    <NavigationContainer >  
        {/* <Stack.Screen name="BoardScreen" component={OnBoardScreen} /> */}
        <Stack.Navigator screenOptions={{headerShown:false}} >

          {isLoading?
          <Stack.Screen 
          name="LodingScreen" 
          component={Load}
          // setIsLoading={setIsLoading}
          />
          :<Stack.Screen name="Drawe" component={DraweNavigator}/>
          }

          <Stack.Screen name='BoarfScreen' component={OnBoardScreen}/>
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
          <Stack.Screen name="SingOut" component={SignOut}/>
          <Stack.Screen name='Register' component={Register}/> 
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;