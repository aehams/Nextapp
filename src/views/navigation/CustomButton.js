import React from 'react';
import {View, StyleSheet, Text, Image,SafeAreaView,TouchableOpacity,TextInput, ScrollView} from 'react-native';
import COLORS from '../../consts/colors';

const CustomButton = ({label,onPress}) => {
    return (
    <TouchableOpacity onPress={onPress} style={styles.TouchableOpacity}>
        <Text style={styles.text2}>{label}</Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    TouchableOpacity:{
        backgroundColor:'red',
        padding:20,
        borderRadius:10,
        marginBottom:20,
    },
    text2:{
        textAlign:'center',
        fontWeight:'700',
        fontSize:19,
        color:COLORS.white
    },
})

export default CustomButton;
