import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native';

import NavigatScreen from './src/views/screens/NavigatScreen';



const App=()=> {

  return (

          <NavigationContainer>

            {/* DeawerNav */}

            <NavigatScreen/>

            {/* TryThis */}
            
        </NavigationContainer>
  )
}

export default App;