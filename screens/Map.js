import React, {useState, useEffect} from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import {  StyleSheet } from "react-native";

// import { Search } from "../components/search.component";
// import { MapCallout } from "../components/map-callout.component";

export const Map = () => {
  const [userMapData, setUserMapData] = useState([]);

  const getUserMapData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users?_start=0&_limit=8');
    const userData = await response.json();

    setUserMapData(userData);    
  }
  
  useEffect(() => {
    getUserMapData();
  },[])
  return (
    <>
      {/* <Search /> */}
      <MapView
      style={styles.container}
      region={{
        latitude: 24.8918,
        longitude: 21.8984,
        latitudeDelta: 21.8984,
        longitudeDelta: 21.8984,
      }}
      >
       {userMapData.map((user, index) => (
        <Marker
          key={index}
            coordinate={{
              latitude: user.address.geo.lat,
              longitude: user.address.geo.lng
            }}
            title={user.name}
            description={user.website}
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
