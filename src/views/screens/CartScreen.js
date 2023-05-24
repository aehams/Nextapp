import React,{useLayoutEffect,useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image,FlatList,TouchableOpacity} from 'react-native';
import COLORS from '../../consts/colors';
import foods from '../../consts/foods';
import {PrimaryButton} from '../components/Button';

const CartScreen = ({navigation}) => {
  const[num,setnum]=useState(0);
  useLayoutEffect(()=>{
    navigation.setOptions({
    headerShown : false,
    })
  },[])
  const CartCard = ({item}) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.image} style={{height: 80, width: 80}} />
        <View style={style.cart}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            {item.ingredients}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold',color:COLORS.green}}>${item.price}</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>1</Text>
          <View style={style.actionBtn}>
            <TouchableOpacity onPress={()=>{
              setnum(x+1)
              console.log("num",num)
            }}>
              <Image source={require('../../assets/remov.png')}style={{width:13,height:13 ,marginTop:10,marginRight:10}}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/add.png')}style={{width:13,height:13 ,marginTop:10,marginLeft:10}}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.light, flex: 1}}>
      <View style={style.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Image source={require('../../assets/aroww.png')} style={{width:35,height:35}}/>
        </TouchableOpacity>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={foods}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={style.pars}>
              <Text style={{fontSize: 18, fontWeight: 'bold',color:COLORS.dark}}>
                Total Price
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold',color:COLORS.green}}>$31.4</Text>
            </View>
            <View style={{marginHorizontal: 30}}>
              <PrimaryButton title="CHECKOUT" />
            </View>
          </View>
        )}
      />
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
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.reed,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  pars:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  cart:{
    height: 100,
    marginLeft: 10,
    paddingVertical: 20,
    flex: 1,
  },
});

export default CartScreen;