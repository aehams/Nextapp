import React, { useState,useLayoutEffect } from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image,ScrollView,TouchableOpacity} from 'react-native';
import COLORS from '../../consts/colors';
import foods from '../../consts/foods';
import {SecondaryButton} from '../components/Button';


const DetailsScreen = ({navigation, route,index}) => {
  const item = route.params;
  const [currentSelected,setCurrentSelected ] = useState([0]);
  useLayoutEffect(()=>{
    navigation.setOptions({
    headerShown : false,
    })
  },[])
  
  return (
    <SafeAreaView style={{backgroundColor: COLORS.reed}}>
      <View style={style.header}>
        <TouchableOpacity  onPress={navigation.goBack}>
          <Image source={require('../../assets/aroww.png')} style={{width:35,height:35}}/>
        </TouchableOpacity> 
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.img}>
          <Image source={item.image} style={{height: 220, width: 220}} />
        </View>
        <View style={style.details}>
          <View style={style.img1}>
            <Text style={style.text}>{item.name}</Text>
            <View style={style.iconContainer}>
              <TouchableOpacity style={{backgroundColor:currentSelected==index?'red':COLORS.white}}>
               <Image source={require('../../assets/lovecart.png')} style={{width:35,height:35}}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop:20}}>
            <Text style={style.text}>The meal Consists of :</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{}}>
          {
            item.ingredientse.map((data,index)=>{
              return(
                <View key={index} style={style.continer}>
                  <Image source={data} style={style.img2}/>
                </View>
              )
            })
          }
          </ScrollView>
          <View style={{marginTop: 20, marginBottom: 40}}>
            <SecondaryButton title="Add To Cart" />
          </View>
          <View style={{marginTop: -30, marginBottom: 40}}>
            <SecondaryButton title="Order Now"/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.dark,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop:65
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  continer:{
    margin:12,
    width:80,
    height:80,
    borderRadius:20,
    backgroundColor:COLORS.white,
    elevation:5,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
  text:{
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.white
  },
  img:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 280
  },
  img1:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img2:{
    width:'100%',
    height:'100%',
    resizeMode:'contain',
  },
});

export default DetailsScreen;