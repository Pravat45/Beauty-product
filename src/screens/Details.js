import {Icon} from 'native-base';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Details({navigation, route}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 30,
        }}>
        <Icon name="chevron-back-outline" onPress={() => navigation.goBack()} />
        <Icon name="grid-outline" />
      </View>

      <View style={{width: '100%', alignItems: 'center'}}>
        <Image
          source={route.params.details.image}
          style={{height: 400, width: 500}}
        />
      </View>

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 10,
          top:30
        }}>
        <View style={styles.descriptionView}>
          <Image source={require('../images/vegan.png')} style={styles.image} />
          <Text>Vegan</Text>
        </View>
        <View style={styles.descriptionView}>
          <Image
            source={require('../images/natural1.png')}
            style={styles.image}
          />
          <Text>Natural</Text>
        </View>

        <View style={styles.descriptionView}>
          <Image
            source={require('../images/natural.png')}
            style={styles.image}
          />
          <Text>C+ Natural</Text>
        </View>
      </View>
      <View style={styles.footerView}>
        <View
          style={{
            height: 270,
            width: '100%',
            backgroundColor: '#fff',
            top: 50,
            borderRadius: 40,
            paddingHorizontal: 30,
            paddingVertical: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                {route.params.details.title}
              </Text>
              <Text style={{fontSize: 16, marginVertical: 15}}>
                {route.params.details.size}
              </Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Icon name="star" style={{fontSize:20}}/>
            <Icon name="star" style={{fontSize:20}}/>
            <Icon name="star" style={{fontSize:20}}/>
            <Icon name="star" style={{fontSize:20}}/>
            <Icon name="star-outline" style={{fontSize:20}}/>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 25,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>
              {route.params.details.price}
            </Text>
            <TouchableOpacity>
              <View
                style={{
                  width: 80,
                  height: 70,
                  backgroundColor: '#000',
                  borderRadius: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>
                  Cart
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: '#E6E9E8',
  },
  descriptionView: {
    height: 110,
    width: 110,
    backgroundColor: '#fff',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 50,
    width: 50,
    marginVertical: 5,
  },
  footerView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
