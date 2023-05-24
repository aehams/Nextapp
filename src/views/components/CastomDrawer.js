import React,{useContext} from 'react';
import {View, StyleSheet, ImageBackground, Image, Text,TouchableOpacity} from 'react-native';
import{DrawerContentScrollView,DrawerItemList}from'@react-navigation/drawer'
import COLORS from '../../consts/colors';
import SignOut from '../navigation/Sign Out';
import { useNavigation } from '@react-navigation/native';

const CastomDrawer = (props)=> {
    // const{login}=useContext(AuthContecxt);
    const navigation = useNavigation();
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView{...props} contentContainerStyle={{backgroundColor:COLORS.white}}>
                <ImageBackground source={require('../../assets/aeham.jpg')} style={styles.img}>
                    <Image source={require('../../assets/aeham.jpg')} style={styles.img1}/>
                    <Text style={styles.text}>Hi , Aeham</Text>
                </ImageBackground>
                <View style={styles.continer}>
                    <DrawerItemList{...props}/>
                </View>
            </DrawerContentScrollView>
            <View style={styles.continer1}>
                <TouchableOpacity onPress={()=>{}} style={styles.TouchableOpacity}>
                    <View style={styles.continer2}>
                        <Image source={require('../../assets/shaer.png')} style={styles.img2}/>
                        <Text style={styles.text1}>Tell a Friend</Text>
                    </View>
                </TouchableOpacity>
               <TouchableOpacity onPress={()=>navigation.navigate('BoarfScreen')} style={styles.TouchableOpacity}> 
                    <View style={styles.continer2}>
                        <Image source={require('../../assets/loguot.png')} style={styles.img2}/>
                        <Text style={styles.text1}>Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    continer:{
        flex:1,
        backgroundColor:COLORS.white,
        paddingTop:10,
        marginTop:0
    },
    continer1:{
        padding:20,
        borderTopWidth:1,
        borderTopColor:'#ccc'
    },
    continer2:{
        flexDirection:'row',
        alignItems:'center'
    },
    TouchableOpacity:{
        paddingVertical:15,
    },
    img:{
        padding:20,
        marginTop:-4
    },
    img1:{
        width:90,
        height:90,
        borderRadius:40,
        marginBottom:10,
        marginLeft:-15
    },
    img2:{
        width:25,
        height:25,
    },
    text:{
        color:COLORS.reed,
        fontSize:20,
        fontWeight:'800'
    },
    text1:{
        fontSize:15,
        marginLeft:5,
        color:COLORS.dark,
        fontWeight:'800'
    },
})

export default CastomDrawer;
