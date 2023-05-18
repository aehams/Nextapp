import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, StyleSheet, View, Image,SafeAreaView} from 'react-native';
import COLORS from '../../consts/colors';
import {PrimaryButton} from '../components/Button';


const OnBoardScreen = ({navigation}) => {
  // const navigation = useNavigation();

  return (
    <SafeAreaView style={style.SafeAreaView}>
      <View style={{height:520}}>
        <Image source={require('../../assets/matman.png')} style={style.img}/>
      </View>
      <View style={style.textContainer}>
        <View>
          <Text style={style.text}>
            Delicious Food
          </Text>
          <Text style={style.text1}>
            We help you to find best and delicious food
          </Text>
        </View>
        <View style={style.indicatorContainer}>
          {/* <View style={style.currentIndicator} />
          <View style={style.indicator} />
          <View style={style.indicator} /> */}
          {/* <Image source={require('../../assets/pz1.png')} style={style.img}/> */}
        </View>
        <PrimaryButton
          onPress={() => navigation.navigate('SingOut')}
          title="Go To eating"
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  SafeAreaView:{
    flex: 1,
    backgroundColor: COLORS.white
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.reed,
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
  },
  img:{
    width: '100%',
    resizeMode: 'contain',
    height:'100%'
  },
  text:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color:COLORS.dark
  },
  text1:{
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.reed
  },
});

export default OnBoardScreen;