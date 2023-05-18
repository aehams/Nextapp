import React,{useLayoutEffect} from 'react';
import {Dimensions,Image,SafeAreaView,StyleSheet,Text,View,FlatList,ScrollView,TextInput,TouchableHighlight,TouchableOpacity} from 'react-native';
import categories from '../consts/categories';
import COLORS from '../consts/colors';
import foods from '../consts/foods';

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const SearchFood = ({navigation}) => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    useLayoutEffect(()=>{
        navigation.setOptions({
        headerShown : false,
        })
    },[])
    const renderCategiryItems = () => {
        return categories.map((item, index) => (
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
                  style={{height: 35, width: 35, resizeMode: 'cover'}}
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
            {/* {categorrender[currentSelected].Item.map(renderCategiryItems)} */}
          </TouchableOpacity>
        ))
    }
    const ListCategories = () => {
        return (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={style.categoriesListContainer}>
            {renderCategiryItems()}
          </ScrollView>
        );
    };
    const Card = ({food}) => {
        return (
          <TouchableHighlight
            underlayColor={COLORS.white}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('DetailsScreen', food)}>
            <View style={style.card}>
              <View style={{alignItems: 'center', top: -50,backgroundColor:COLORS.reed}}>
                <Image source={food.image} style={{height: 120, width: 120}} />
              </View>
              <View style={{marginHorizontal: 20,}}>
                <Text style={{fontSize: 18, fontWeight: 'bold',color:COLORS.reed}}>{food.name}</Text>
                <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
                  {food.ingredients}
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
                  $ {food.price}
                </Text>
                <View style={style.addToCartBtn}>
                  <Image source={require('../assets/add.png')} style={{height:15,width:15}}/>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        );
    };

    return (
        <SafeAreaView style={style.continer}>
            <View style={style.continer1}>
                <Text style={style.text}>Look for Different Food :</Text>
            </View>
            <View style={{marginTop:10,}}>
                <Image source={require('../assets/fastfood.jpg')} style={style.img}/>
            </View>
            <View>
                <ListCategories />
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={foods}
                renderItem={({item}) => <Card food={item}/>}
            />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    continer:{
        flex:1,
        backgroundColor:COLORS.white
    },
    continer1:{
       marginTop:15,
       marginHorizontal:10,
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
        color:COLORS.dark
    },
    img:{
        width:'100%',
        height:'60%',
        borderRadius:50
    },
    categoryBtnImgCon: {
        height: 35,
        width: 35,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoriesListContainer: {
        paddingVertical: 30,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    card: {
        height: 220,
        width: cardWidth,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 50,
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
})

export default SearchFood;
