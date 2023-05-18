import React from 'react';
import {Dimensions,Image,SafeAreaView,StyleSheet,Text,View,TouchableHighlight,TouchableOpacity} from 'react-native';
import COLORS from '../../consts/colors';

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const Cardfood = (data, index,{navigation}) => {
    return (
      <TouchableOpacity
        key={index}
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() =>
            navigation.push('Details', {
            name: data.name,
            price: data.price,
            image: data.image,
            size: data.size,
            crust: data.crust,
            delivery: data.delivery,
            ingredients: data.ingredients,
            isTopOfTheWeek: data.isTopOfTheWeek,
            navigation: navigation,
        })}>
        <View style={style.card}>
          <View style={{alignItems: 'center', top: -40}}>
            <Image source={data.image} style={{height: 120, width: 120}} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold',color:COLORS.reed}}>{data.name}</Text>
            <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
              {data.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold',color:COLORS.green}}>
              $ {data.price}
            </Text>
            <View style={style.addToCartBtn}>
              <Image source={require('../../assets/add.png')} style={{height:15,width:15}}/>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
};
const style = StyleSheet.create({
    categoryBtnImgCon: {
        height: 35,
        width: 35,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        height: 220,
        width: cardWidth,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 50,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: COLORS.white,
    },
    addToCartBtn: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: COLORS.reed,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default Cardfood;