//******************************************************************************
import * as React from 'react';
import {Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import Constants from 'expo-constants';
import { connect } from 'react-redux';

import MapView from 'react-native-maps';

const Screen = Dimensions.get('window');
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { geocode } from './helperFunction.js'
import Header from './header';
import MapOverLaye from './mapOverLay';
import BottomView from './buttomView';
//******************************************************************************

const googleApiKey='INTEAR_YOUR_API_KEY';

//******************************************************************************
 class map extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        address1: '',
        address2: '',
        mapRegion: new MapView.AnimatedRegion({
          latitude: 28.3959452,
          longitude: 36.5243552,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }),
        marker: {
          latitude: 28.3959452,
          longitude: 36.5243552,
        },
        location: {
          latitude: 28.3959452,
          longitude: 36.5243552,
        }
      }
     
    }

//******************************************************************************
  componentWillMount = async () => {
    try {
      await this._getLocationAsync();
    } catch (err) {
      alert(err)
    }
  }

//******************************************************************************
  setMarkerRef = ref => {
    this.marker = ref;
  };
//******************************************************************************

  getPlaceName = async () => {
    try {
      let place = await geocode(
        this.state.marker.latitude.toString(),
        this.state.marker.longitude.toString(),
        googleApiKey
        );
      this.setState({ address1: place })
    } catch (err) {
      console.log(err);
    }
  };
//******************************************************************************

  _handleMapRegionChange = mapRegion => {
    this.state.mapRegion.setValue(mapRegion);
  };

  async _onLongPress(e) {
    this.setState({ address1: 'تحميل...',marker: e.nativeEvent.coordinate })
    await this.getPlaceName();
    this.marker.showCallout();

    this.setState({ nameloading: false })
  }
//******************************************************************************

  async _onPress(e) {

    this.setState({ address1: 'تحميل...',marker: e.nativeEvent.coordinate })
    await this.getPlaceName();
    this.marker.showCallout();

    this.setState({ nameloading: false })
  }

//******************************************************************************

  altra_status = (data) => {
    eralt(
      data
    );
  };
//******************************************************************************

  _getLocationAsync = async () => {
    this.setState({ address1: 'تحميل...',})
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
      });
    } else {
      let locationOn = await Location.hasServicesEnabledAsync()
      if (!locationOn) {
        this.altra_status('enable location from setting')
      } else {

        let location = await Location.getCurrentPositionAsync({
          enableHighAccuracy: true,
          timeout: 5000,
          maxiumumAge: 10000,
        });
        var lat = parseFloat(location.coords.latitude);
        var long = parseFloat(location.coords.longitude);
        this.state.mapRegion.setValue({
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        });
        this.setState({ marker: { latitude: lat,longitude: long,} })

        await this.getPlaceName();

        this.marker.showCallout();
      }
    }
  };
//******************************************************************************



  async onDrag(e) {
    this.setState({ address1: 'تحميل...',marker: e.nativeEvent.coordinate })
    await this.getPlaceName();
    this.marker.showCallout();
    this.setState({ nameloading: false })

  }
//******************************************************************************

  setMarkerRef = ref => {
    this.marker = ref;
  };
//******************************************************************************

marker=()=>{
  <MapView.Marker
  draggable
  ref={marker => this.setMarkerRef(marker)}
  image={require('../assets/marker.png')}
  coordinate={this.state.marker}
  onDragEnd={e => this.onDrag(e)}
>
  <MapView.Callout tooltip={true}>
    <Text
      style={styles.calloutStyle}>
      {' '}
      عنوان التوصيل{' '}
    </Text>
  </MapView.Callout>
</MapView.Marker>
}


//******************************************************************************

  render() {
    return (
      <View style={styles.container}>
        <Header title={'العنوان بالتفصيل'} />
        <View style={{ flex: 1 }}>
          <MapView.Animated
            style={styles.mapStyle}
            region={this.state.mapRegion}
            onRegionChange={this._handleMapRegionChange}
            onLongPress={e => this._onLongPress(e)}
            onPress={e => this._onPress(e)}
            showsUserLocation={true}
            showsMyLocationButton={true}
          >
           <this.marker/>
          </MapView.Animated>
          <MapOverLaye _getLocationAsync={this._getLocationAsync}  address1={this.state.address1} />
          <BottomView address1={this.state.address1} address2={this.state.address2} />
        </View>
      </View>
    );
  }
}
//******************************************************************************



//******************************************************************************

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  mapStyle:{
    flex: 1,
    alignSelf: 'stretch',
    width: Screen.width
  },
  calloutStyle:{
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOffset: { width: 2,height: 0 },
    shadowRadius: 8,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    marginBottom: 4,
    padding: 3,
  }
});
//******************************************************************************
const mapStateToProps = ({  }) => {
  return {} ;
};

export default connect(
  mapStateToProps,
  {}
)(map);

//******************************************************************************