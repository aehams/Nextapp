import React from 'react';
import {View, StyleSheet, Text, Image,SafeAreaView,TouchableOpacity,TextInput} from 'react-native';
const InputFleled = ({label,icon,inputType,keyboardType,fieldButtonLabel,fieldButtonFunction}) => {
    return (
        <View style={styles.continer2}>
        {/* <Image source={require('../../assets/pasword.png')} style={styles.img1}/> */}
        {icon}
        {inputType == 'password' ?
        (<TextInput placeholder={label} keyboardType={keyboardType} secureTextEntry={true} style={styles.TextInput}/>)
        :(<TextInput placeholder={label} keyboardType={keyboardType} style={styles.TextInput}/>)}
        <TouchableOpacity onPress={fieldButtonFunction}>
            <Text style={styles.text1}>{fieldButtonLabel}</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    continer2:{
        flexDirection:'row',
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        paddingBottom:8,
        marginBottom:25
    },
    TextInput:{
        flex:1,
        paddingVertical:0
    },
    text1:{
        fontSize:17,
        color:'red',
        fontWeight:'700',
        marginTop:10
    },
})

export default InputFleled;
