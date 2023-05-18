// import AsyncStorage from '@react-native-async-storage/async-storage';
// import React , {createContext, useState ,useEffect} from 'react';
// import {View, StyleSheet} from 'react-native';

// const AuthContecxt=createContext();

// const AuthProvid = ({Children}) => {
//     const [isLoding,setIsLoding]=useState(false);
//     const [uesrToken,setUesToken]=useState(null);

//     const Login=()=>{
//         setIsLoding(true);
//         setUesToken('ioiojlkad');
//         AsyncStorage.setItem('useToken','ioiojlkad');
//         setIsLoding(false);
//     }
//     const Logout=()=>{
//         setIsLoding(true);
//         setUesToken(null);
//         AsyncStorage.removeItem('useToken');
//         setIsLoding(false);
//     }
//     const isLoggedIn=async()=>{
//         try{
//             setIsLoding(true);
//             let userToken =await AsyncStorage.getItem('useToken'); 
//             setUesToken(userToken);
//             setIsLoding(false);
//         }
//         catch(e){
//             console.log(`isLogged in error ${e}`);
//         }
//     }
//     useEffect(()=>{
//         isLoggedIn()
//     },[]);
//     return (
//         <AuthContecxt.Provider value={{Login,Logout,isLoding,uesrToken}}>
//             {Children}
//         </AuthContecxt.Provider>
//     );
// }

// const styles = StyleSheet.create({})

// export default {AuthProvid,AuthContecxt};
