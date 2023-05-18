import React from 'react';
import { View, StyleSheet, ScrollView, Text, FlatList } from 'react-native';
import categories from '../../consts/categories';
import CategiryItem from './RenderCategiryItems';


const ListCategories = () => {

  const renderItems = () => {
    return categories.map((item, index) => <CategiryItem item={item} index={index} />)
    // return categories.map(i=> <Text>bbb</Text>)
    // return <Text>bbb</Text>
    // return <CategiryItem item={item} index={index}/>
  }

  // return (
  //   // <ScrollView
  //   //   horizontal 
  //   //   showsHorizontalScrollIndicator={false}
  //   //   contentContainerStyle={style.categoriesListContainer}>
  //   //   {renderItems()}
  //   // </ScrollView>

  //   // <FlatList style={style.list} keyExtractor={(item) => item.id} horizontal data={categories} renderItem={renderItems} />
  // );
};

const style = StyleSheet.create({
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  list: {
    marginVertical: 10,
    height: 80,
  }
})

export default ListCategories;
