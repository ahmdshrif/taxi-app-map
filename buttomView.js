
//******************************************************************************
import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
const Screen = Dimensions.get('window');

//******************************************************************************


export default bottomView = ({address1, address2}) => (
  <View
    style={styles.container}>
    <Text
      style={styles.text1}>
      {'العنوان بالتفصيل'}{' '}
    </Text>

    <View style={styles.box} >
      <Text style={styles.addressText}>{address1}</Text>
      <Text style={styles.addressText}>{address2}</Text>
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{'تأكيد العنوان'}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

//******************************************************************************

const styles = StyleSheet.create({
  container: {
    height: Screen.height * 0.3,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  text1: {
    width: Screen.width - 16 - 80,
    textAlign: 'right',
    marginRight: 16,
    color: '#0083B0',
    marginBottom: 10,
  },
  box: {
    borderWidth: 1.2,
    borderRadius: 12.5,
    borderColor: '#005B7B',
    flex: 1,
    width: Screen.width - 80,
    justifyContent: "center",
  },
  addressText: { textAlign: "right",marginRight: 10,color: '#707070' },
  buttonContainer: { marginTop: 16,marginBottom: 20 },
  button: {
    borderRadius: 7,
    backgroundColor: '#D18F01',
    width: Screen.width * 0.4,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{ fontSize: 16,fontWeight: '600' }
})
//******************************************************************************
