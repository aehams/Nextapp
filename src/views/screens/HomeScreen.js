import React, { useRef, useLayoutEffect, useState ,useContext} from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View, } from 'react-native';
import { FlatList, ScrollView, TextInput, TouchableHighlight, TouchableOpacity, } from 'react-native';
import COLORS from '../../consts/colors';
import categories from '../../consts/categories';
import foods from '../../consts/foods';
import Cardrender from '../components/Cardrender';
import ListCategories from '../components/ListCategories';
import Context from '../../Condext&&provider/Context';

const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const HomeScreen = ({ navigation }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const [currentSelected, setCurrentSelected] = useState([0]);
  // const {User}=useContext(Context);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])


  // const renderCategiryItems = () => {
  //     return categories.map((item, index) => (
  //       <TouchableOpacity
  //         key={index}
  //         activeOpacity={0.9}
  //         onPress={() => setSelectedCategoryIndex(index)}>
  //         <View
  //           style={{
  //             backgroundColor:
  //               selectedCategoryIndex == index
  //                 ? COLORS.reed
  //                 : COLORS.secondary,
  //             ...style.categoryBtn,
  //           }}>
  //           <View style={style.categoryBtnImgCon}>
  //             <Image
  //               source={item.image}
  //               style={{height: 35, width: 35, resizeMode: 'cover'}}
  //             />
  //           </View>
  //           <Text
  //             style={{
  //               fontSize: 15,
  //               fontWeight: 'bold',
  //               marginLeft: 10,
  //               color:selectedCategoryIndex == index? COLORS.white: COLORS.reed,
  //             }}>
  //             {item.name}
  //           </Text>
  //         </View>
  //         {/* {categorrender[currentSelected].Item.map(renderCategiryItems)} */}
  //       </TouchableOpacity>
  //     ))
  // }

  // const ListCategories = () => {
  //   return (
  //     <ScrollView
  //       horizontal
  //       showsHorizontalScrollIndicator={false}
  //       contentContainerStyle={style.categoriesListContainer}>
  //       {renderCategiryItems()}
  //     </ScrollView>
  //   );
  // };

  // const Card = ({food}) => {
  //   return (
  //     <TouchableHighlight
  //       underlayColor={COLORS.white}
  //       activeOpacity={0.9}
  //       onPress={() => navigation.navigate('DetailsScreen', food)}>
  //       <View style={style.card}>
  //         <View style={{alignItems: 'center', top: -50,backgroundColor:COLORS.reed}}>
  //           <Image source={food.image} style={{height: 120, width: 120}} />
  //         </View>
  //         <View style={{marginHorizontal: 20,}}>
  //           <Text style={{fontSize: 18, fontWeight: 'bold',color:COLORS.reed}}>{food.name}</Text>
  //           <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
  //             {food.ingredients}
  //           </Text>
  //         </View>
  //         <View
  //           style={{
  //             marginTop: 10,
  //             marginHorizontal: 20,
  //             flexDirection: 'row',
  //             justifyContent: 'space-between',
  //           }}>
  //           <Text style={{fontSize: 18, fontWeight: 'bold',color:COLORS.green}}>
  //             $ {food.price}
  //           </Text>
  //           <View style={style.addToCartBtn}>
  //             <Image source={require('../../assets/add.png')} style={{height:15,width:15}}/>
  //           </View>
  //         </View>
  //       </View>
  //     </TouchableHighlight>
  //   );
  // };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <View>
          <View style={{ marginTop: 10, flexDirection: 'row' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: COLORS.reed }}>Hello,</Text>
            <Text style={{ fontSize: 28, fontWeight: '600', marginLeft: 10, color: COLORS.dark }}>
              {/* {User.name} */}
            </Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 22, color: COLORS.grey }}>
            What do you want today
          </Text>
        </View>


        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginTop: 14 }}>
          <Image
            source={require('../../assets/aeham.jpg')}
            style={{ height: 117, width: 117, borderRadius: 25, marginTop: -20 }}
          />
        </TouchableOpacity>
      </View>


      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={style.inputContainer}>
          <Image source={require('../../assets/search.png')} style={{ width: 30, height: 30, marginRight: 10 }} />
          <TextInput
            style={{ flex: 1, fontSize: 18 }}
            placeholder="Search for food"
          />
        </View>
        <View style={style.sortBtn}>
          <TouchableOpacity>
            <Image source={require('../../assets/tun.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <ListCategories />

      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({ item }) => <Cardrender food={item} />}
      />
      {/* <Carditem/> */}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.reed,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
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
});

export default HomeScreen;