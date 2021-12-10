import React from 'react';
import {View, Text, FlatList} from 'react-native';
import CardView from '../../components/CardView';
import styles from './styles';

const DisplayList = ({data, headerTitle}) => {
  return (
    <View style={styles.container}>
      {headerTitle && <Text style={styles.headerText}>{headerTitle}</Text>}
      <FlatList
        data={data}
        horizontal
        ListHeaderComponent={() => <View style={{padding: 4}} />}
        renderItem={({item, index}) => CardView(item, index)}
      />
    </View>
  );
};

export default DisplayList;
