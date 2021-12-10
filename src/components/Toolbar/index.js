import * as React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';

function Toolbar({title}) {
  return (
    <View style={styles.container}>
      <Pressable style={{padding: 8}}>
        <Image
          source={require('../../images/menu.png')}
          style={styles.iconStyle}
        />
      </Pressable>
      <Text style={styles.textStyle}>{title}</Text>
      <Pressable style={{padding: 8}}>
        <Image
          source={require('../../images/search.png')}
          style={styles.iconStyle}
        />
      </Pressable>
    </View>
  );
}

export default Toolbar;
