//******************************************************************************
import {Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';
const Screen = Dimensions.get('window');
import * as React from 'react';
import Constants from 'expo-constants';
//******************************************************************************


//******************************************************************************
export default  header = ({title}) => (
    <View
      style={styles.headerstyle}>
      <Text style={{ color: 'white',size: 16,}} >{title}</Text>
    </View>
  );

const styles = StyleSheet.create({
 headerstyle: {
    height: Screen.height * 0.15,
    backgroundColor: '#0083B0',
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
//******************************************************************************
