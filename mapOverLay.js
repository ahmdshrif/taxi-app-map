//******************************************************************************
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
const Screen = Dimensions.get('window');

//******************************************************************************



//******************************************************************************
export default mapOverLaye = ({address1, _getLocationAsync}) => (
  <View style={{ position: 'absolute',width: Screen.width,height: Screen.height * 0.55 }}>
    <View
      style={styles.container}>
      <Image
        source={require('../assets/locationIcon.png')}
        resizeMode={"contain"}
        style={styles.locationicon}
      />
      <Text style={styles.Text} >{address1} </Text>
      <View style={styles.lablecontainer}>
        <Text style={styles.lableText}>{'العنوان'}</Text>
      </View>
    </View>
    <TouchableOpacity
      onPress={() => _getLocationAsync()}
      style={styles.button} >
      <Image
        source={require('../assets/locationButton.png')}
        resizeMode={"contain"}
        style={styles.Image}
      />
    </TouchableOpacity>
  </View>
);
//******************************************************************************

styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    left: Screen.width * 0.075,
    right: Screen.width * 0.075,
    width: Screen.width * 0.85,
    borderRadius: 10,
    height: 69.84 / 1.4,
    backgroundColor: 'white',
    flexDirection: "row",
    alignItems: "center"
  },
  locationicon: {
    height: 20,
    marginLeft: 10
  },
  text: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  },
  lablecontainer: {
    backgroundColor: '#0083B0',
    width: Screen.width * 0.2,
    height: 69.84 / 1.4,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7
  },
  lableText: { color: 'white' },
  button: {
    position: "absolute",
    bottom: 10,
    right: 0,
  },
  Image: { height: 40 }
})
//******************************************************************************
