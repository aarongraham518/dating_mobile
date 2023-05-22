import React from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import {  StyleSheet } from "react-native";

// import { Search } from "../components/search.component";
// import { MapCallout } from "../components/map-callout.component";

let mapData = [
  {
    latitude: 27.76757844065867, 
    longitude: -82.63462421336362
  },
  {
    latitude: 27.75480468996914, 
    longitude: -82.64110732487218
  },
  { 
    latitude: 27.75715042467095, 
    longitude: -82.63028084852364
  },
  {
    latitude: 27.77012170753001, 
    longitude: -82.63024891201522
  },
  {
    latitude: 27.785035576059684, 
    longitude: -82.64435979282699
  }
]
export const Map = () => {

  return (
    <>
      {/* <Search /> */}
      <MapView
      style={styles.container}
      region={{
        latitude: 27.76757844065867,
        longitude: -82.63462421336362,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >
       {mapData.map((atm, index) => (
        <Marker
          key={index}
            coordinate={{
              latitude: atm.latitude,
              longitude: atm.longitude
            }}
            title={'CoinFlip ATM'}
            description={'Buy Bitcoin and Matic Here!'}
          />     
       ))}
               
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});
