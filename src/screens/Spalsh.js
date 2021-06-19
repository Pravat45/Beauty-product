import {Icon} from 'native-base';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function Spalsh({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/themancomapny-facewash.png')}
        style={{width: 400, height: 400}}
      />
      <Text style={styles.text}>
        Let Us Reward {'\n'}You,{' '}
        <Text style={[styles.text, {fontWeight: 'bold'}]}>Naturally !!</Text>
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.forwardBtn}>
          <Icon name="chevron-forward-outline"/>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAEF',
    alignItems: 'center',
    paddingVertical:100
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    lineHeight: 50,
    marginVertical:40
  },
  forwardBtn: {
    height: 70,
    width: 70,
    borderWidth: 2,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:30
  },
});
