import Lottie from 'lottie-react-native';
import React,{Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { InterfaceOrientation } from 'react-native-reanimated';
import HomeScreen from './HomeScreen';
import RestorData from '../navigation/RestorData/RestorData';


 const LodingScreenIn  = (setIsLoading) => {


    return (
        <View style={styles.continer}>
            <Lottie
                source={require('../../assets/loding.json')}
                autoPlay
                loop={false}
                resizeMode='cover'
                speed={1.5}
                //onLayout={{}}
                onAnimationFinish={()=>setIsLoading(false)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    continer:{
        flex:1,
        alignItems:'center',
        margin:20,
        backgroundColor: 'red',
    },
})

export default LodingScreenIn;
