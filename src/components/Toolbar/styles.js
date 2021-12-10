import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  iconStyle: {height: 18, width: 18, resizeMode: 'contain'},
  textStyle: {padding: 8, fontSize: 16, color: '#1c1c1c', fontWeight: '600'},
  image: {
    height: 18,
    width: 18,
    marginBottom: 4,
  },
});

export default styles;
