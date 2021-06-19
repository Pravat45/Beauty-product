import {Icon} from 'native-base';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';

const faceData = [
  {
    id: '1',
    title: 'Facial Cleanser',
    price: '$9.99',
    image: require('../images/beardo-detan-facewash.png'),
    size: '4.23 fl oz /125ml'
  },
  {
    id: '2',
    title: 'Moisturiser',
    price: '$11.99',
    image: require('../images/tiege-moisturing-cream.png'),
    size: '4.23 fl oz /125ml'
  },
  {
    id: '3',
    title: 'Body Wash',
    price: '$10.99',
    image: require('../images/beardo-bodywash.png'),
    size: '4.23 fl oz /125ml'
  },
  {
    id: '4',
    title: 'Peeloff Mask',
    price: '$10.99',
    image: require('../images/beardo-peeloff-mask.png'),
    size: '4.23 fl oz /125ml'
  },
];

export default function Home({navigation}) {
  const renderItem = ({item}) => {
    return (
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', {details: item})}>
          <View style={{alignItems: 'center', marginVertical: 10}}>
            <Image source={item.image} style={{width: 200, height: 250}} />
          </View>
        </TouchableOpacity>
        <View style={{marginHorizontal: 15, marginVertical: 10}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.title}</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginVertical: 10}}>
            {item.price}
          </Text>
          <TouchableOpacity>
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: '#000',
                position: 'absolute',
                right: 0,
                bottom: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="cart-outline" style={{color: '#fff'}} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const popularRenderItem = ({item}) => {
    return (
      <TouchableOpacity  onPress={() => navigation.navigate('Details', {details: item})}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 70,
                height: 70,
                borderRadius: 15,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={item.image} style={{width: 50, height: 50}} />
            </View>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', marginHorizontal: 19}}>
              {item.title}
            </Text>
          </View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Image
              source={require('../images/pravat.jpg')}
              resizeMode="contain"
              style={{width: 50, height: 50, borderRadius: 25}}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon name="search-outline" style={{marginHorizontal: 30}} />
            <Icon name="grid-outline" />
          </View>
        </View>

        <View style={styles.tabConatiner}>
          <TouchableOpacity>
            <Text
              style={[
                styles.tabText,
                {
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: 20,
                  textDecorationLine: 'underline',
                },
              ]}>
              Face
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.tabText}>Body</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.tabText}>Hair</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.tabText}>Gifts</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: 20}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={faceData}
            renderItem={renderItem}
          />
        </View>

        <View style={{marginVertical: 20, marginHorizontal: 30}}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>Popular</Text>
          <View>
            <FlatList
              data={faceData}
              renderItem={popularRenderItem}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: '#EBEAEF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  tabConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  tabText: {
    fontSize: 18,
    color: '#A9A9A9',
  },
  categoryContainer: {
    height: 350,
    width: 210,
    backgroundColor: '#fff',
    left: 30,
    borderRadius: 15,
    marginRight: 20,
  },
});
