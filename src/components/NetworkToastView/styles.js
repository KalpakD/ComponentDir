import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 10,
  },
  modalView: {
    flexDirection: 'row',
    backgroundColor: '#DC143C',
    borderRadius: 5,
    paddingHorizontal: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 4,
    textAlign: 'center',
    color: '#FFF',
    fontSize: 14,
    padding: 8,
  },
  image: {
    height: 18,
    width: 18,
    marginBottom: 4,
  },
});

export default styles;
