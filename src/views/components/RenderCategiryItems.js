import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity,Image, Text} from 'react-native';
import categories from '../../consts/categories';
import COLORS from '../../consts/colors';


const CategiryItem = (props) => {

    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

    const {item , index} = props;

    return  (
      <TouchableOpacity
        key={index}
        activeOpacity={0.9}
        onPress={() => setSelectedCategoryIndex(index)}>
        <View
          style={{
            backgroundColor:
              selectedCategoryIndex == index
                ? COLORS.reed
                : COLORS.secondary,
            ...style.categoryBtn,
          }}>
          <View style={style.categoryBtnImgCon}>
            <Image
              source={item.image}
              style={style.img}
            />
          </View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: 10,
              color:selectedCategoryIndex == index? COLORS.white: COLORS.reed,
            }}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    categoryBtnImgCon: {
        height: 35,
        width: 35,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryBtn: {
        height: 45,
        width: 120,
        marginRight: 7,
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row',
    },
    img:{
        height: 35,
        width: 35,
        resizeMode: 'cover'
    },
})

export default CategiryItem;
