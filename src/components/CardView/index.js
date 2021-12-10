import * as React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

function CardView({title, description}) {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </Pressable>
  );
}

export default CardView;
