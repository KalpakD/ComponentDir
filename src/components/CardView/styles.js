import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    width: width / 2 - 16,
    backgroundColor: '#fff',
    margin: 4,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 8,
  },
  title: {fontWeight: '400', fontSize: 16},
  description: {fontWeight: '400', fontSize: 14, color: '#808080'},
});

export default styles;
