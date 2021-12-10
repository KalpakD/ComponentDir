import * as React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import Toolbar from '../../components/Toolbar';
import DisplayList from '../../containers/DisplayList';

const components = [
  {title: 'Alert', description: 'Customised Alert Dialog'},
  {title: 'BottomSheet', description: 'Customised Alert Dialog'},
];
const navigationTyps = [
  {title: 'Drawer', description: 'Customised Alert Dialog'},
  {
    title: 'Bottom Navigation',
    description: 'Customised Alert Dialog',
  },
  {title: 'Tab Navigation', description: 'Customised Alert Dialog'},
];
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Toolbar title={'Dashboard'} />
      <ScrollView style={{flex: 1}} nestedScrollEnabled>
        <View style={{flex: 1}}>
          <DisplayList headerTitle={'Common Components'} data={components} />
          <DisplayList headerTitle={'Navigation Types'} data={navigationTyps} />
          <DisplayList headerTitle={'Common Components'} data={components} />
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
