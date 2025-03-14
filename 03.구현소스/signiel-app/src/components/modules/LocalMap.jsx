// 구글맵 컴포넌트 - Google Map 
// ★반드시 npm i @react-google-maps/api 로 설치해야함!

import React, { memo } from 'react'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  // padding: '0 20px'
};

// const center = {
//   lat: 14.018000,
//   lng: 120.835941
// };

function LocalMap({center}) {
    return (
        <LoadScript
          googleMapsApiKey="AIzaSyD-n65kmRFWXHWxvLRIy2nHHcKBoSm09Mg"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
          >
            <MarkerF position={center} icon={"./images/logo/marker.png"}></MarkerF>
          </GoogleMap>
        </LoadScript>
      )
}

export default memo(LocalMap);