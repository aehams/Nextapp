import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import BottomNavigator from './src/views/navigation/BottomNavigator';
import DetailsScreen from './src/views/screens/DetailsScreen';
import SignOut from './src/views/navigation/Sign Out';
import Register from './src/views/navigation/Register';
import DraweNavigator from './src/views/screens/drwer';
import AuthContecxt from './src/views/components/Fierbasse';
import {View,ActivityIndicator} from 'react-native';
import LodingScreenIn from './src/views/screens/LodingScreenIn';
import HomeScreen from './src/views/screens/HomeScreen';
import NavigatScreen from './src/views/screens/NavigatScreen';
import Provider from './src/Condext&&provider/Provider';
import Context from './src/Condext&&provider/Context';


const App=()=> {

  return (
    <Provider>
      <Context.Consumer>
        {Context=>(
          <NavigationContainer>

            {/* DeawerNav */}
            {/* <View style={{flex: 1,backgroundColor: 'red',}}/> */}
            <NavigatScreen/>
            {/* TryThis */}
            
        </NavigationContainer>
        )}
      </Context.Consumer>
    </Provider>
  )
}

export default App;