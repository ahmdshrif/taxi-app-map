


// get place name
//********************************************************************
const url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';

//******************************************************************************
export async function geocode(myLat,myLon,myApiKey) {
  const response = await fetch(
    url + myLat + ',' + myLon + '&key=' + myApiKey + '&language=ar'
  );
  if (response.ok) {
    const response1 = await response.json();
    return (
      response1.results[0].address_components[1].long_name +
      ' , ' +
      response1.results[0].address_components[2].long_name
    );
  }
  const errMessage = response.status();
  throw new Error(errMessage);
}

//******************************************************************************

