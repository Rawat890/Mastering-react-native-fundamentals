import Header from '@/commonComponents/Header';
import Loader from '@/commonComponents/Loader';
import TextButton from '@/commonComponents/TextButton';
import { fontNames } from '@/utils/fontfamily';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

export default function ShoppingList() {

  const [shoppingProducts, setShoppingProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchShoppingList();
  }, [])

  const fetchShoppingList = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://dummyjson.com/products');
      setShoppingProducts(response.data.products);
      console.log('response - ', response.data.products)
    } catch (error) {
      console.log("Error - ", error);
    }
    finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <Loader loading={loading} />
    )
  }

  const renderShoppingItem = ({ item }: { item: any }) => {
    return (
      <>
      <View style={styles.container}>
        <View style={styles.view1}>
          <Image source={{ uri: item.images[0] }} width={160} height={160} style={styles.image}/>
          <View style={styles.buttonContainer}>
            <TextButton label='Add to cart' mode='outlined' />
            <TextButton label='Buy now' mode='contained' />
          </View>
        </View>

        <CommonView name={'Title'} value={item.title} />
        <CommonView name={'Price'} value={item.price} />
        <CommonView name={'Brand'} value={item.brand} />
        <CommonView name={'Category'} value={item.category} />
        <CommonView name={'Description'} value={item.description} />
        <CommonView name={'Warranty'} value={item.warrantyInformation} />
      </View>
      <View style={{borderWidth:1, borderColor:'grey', marginTop: 10, marginHorizontal: 10}}/>
      </>
    );
  };

  return (
    <View>
      <Header title='Shopping cart' />
      <FlatList
        data={shoppingProducts}
        showsVerticalScrollIndicator={false}
        renderItem={renderShoppingItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

const CommonView = ({ name, value }) => {
  return (
    <>
    <View style={styles.commonViewContainer}>
      <Text style={{fontFamily: fontNames.bold, fontSize:16}}>{name} : <Text style={{fontFamily: fontNames.medium, fontSize:14}}>{value}</Text></Text>
    </View>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'column',
    width: '50%',
    paddingTop: 10,
  },
  commonViewContainer: {
    paddingVertical: 3,
  },
  image:{
    elevation:2,
    borderColor: 'grey',
    borderWidth:1,
    marginVertical:10
  }
})