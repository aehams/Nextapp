import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useContext} from 'react';
import {View, StyleSheet} from 'react-native';

const RestorData = async () => {
    const {User}=useContext(TheContext);
    
    let users = await AsyncStorage.getAllKeys()
    if (users.length!=0){//if there user
        users.forEach(async username=>{
            let user =await AsyncStorage.getItem(username)
            user = JSON.parse(user);// cast from string to data
            if (users.logged){
                User.mail=user.mail,
                User.name=user.name,
                User.password=user.password,
                User.logged=user.logged,
                User.imge=user.imge,
                User.imgeBackground=user.imgeBackground,
                User.list=user.list
            }
        })
    }
}

const styles = StyleSheet.create({})

export default RestorData;
