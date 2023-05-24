import React from 'react';
import {Image,StyleSheet,Text,View,TouchableHighlight, Dimensions} from 'react-native';
import COLORS from '../../consts/colors';
import { useNavigation } from '@react-navigation/native';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const Cardrender = ({food}) => {

    const navigation = useNavigation();

    return (
        <TouchableHighlight
          underlayColor={COLORS.white}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('DetailsScreen', food)}>
          <View style={style.card}>
            <View style={style.imgvewi}>
              <Image source={food.image} style={style.img} />
            </View>
            <View style={style.viewtext}>
              <Text style={style.text}>{food.name}</Text>
              <Text style={style.text1}>
                {food.ingredients}
              </Text>
            </View>
            <View
              style={style.viewprice}>
              <Text style={style.price}>
                $ {food.price}
              </Text>
              <View style={style.addToCartBtn}>
                <Image source={require('../../assets/add.png')} style={style.img1}/>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      );
}

const style = StyleSheet.create({
    card: {
        height: 220,
        width: cardWidth,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 70,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: COLORS.dark,
    },
    addToCartBtn: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: COLORS.reed,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgvewi:{
        alignItems: 'center',
        top: -50,
        backgroundColor:COLORS.reed
    },
    img:{
        height: 120,
        width: 120
    },
    img1:{
        height:15,
        width:15
    },
    viewtext:{
        marginHorizontal: 20
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color:COLORS.reed
    },
    text1:{
        fontSize: 14,
        color: COLORS.grey,
        marginTop: 2
    },
    viewprice:{
        marginTop: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price:{
        fontSize: 18,
        fontWeight: 'bold',
        color:COLORS.green
    },
})

export default Cardrender;
