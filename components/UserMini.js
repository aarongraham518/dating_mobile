import { StyleSheet, View, Text, Image } from "react-native";
import {ImageHelper} from './ImageHelper';

export const UserMini = ({ realName, city, id}) => {

  return (
    <View style={styles.wrapper}>
       <View style={styles.imageContainer}>
        {/* <Image source={} style={styles.image} /> */}
        <ImageHelper id={id}/>
      </View> 

      <View style={styles.nameCityContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.namePush}>{realName}</Text>
        </View>

        <View style={styles.cityContainer}>
          <Text style={styles.cityLabel}>City</Text>
          <Text style={styles.cityText}>{city}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 4,
    // borderColor: "white",
    marginTop: 20,
  },
  imageContainer: {
    // borderWidth: 4,
    // borderColor: 'white',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "grey",
  },
  nameCityContainer: {
    flexDirection: "row",
    flexGrow: 1,
    marginLeft: 10,
    justifyContent: "space-between",
    // borderWidth: 4,
    // borderColor: "red",
  },
  nameContainer: {
    // borderWidth: 2,
    // borderColor: "green",
  },
  namePush: {
    color: "white",
    fontSize: 22,
    fontWeight: "500",
    position: 'relative',
    top: 10
  },
  cityContainer: {
    alignItems: "flex-end",
    posistion: 'relative',
    top: -3
    // borderWidth: 4,
    // borderColor: "pink",
  },
  cityLabel: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  cityText: {
    color: "grey",
    fontSize: 16,
    fontWeight: "600",
  },
});
