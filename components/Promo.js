import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

export const Promo = () => {
  let image = require("../assets/busycitydark.png");
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.promoContainer}
      >
        <View style={styles.promoTextButtonContainer}>
          <Text style={[styles.promoText]}>20%</Text>
          <Text style={[styles.promoText, styles.promoOffText]}>OFF</Text>
          <Text style={[styles.promoTextSmall]}>Find members today</Text>
          <View style={styles.premiumContainer}>
            <Text style={styles.premiumText}>PREMIUM NOW</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: "white",
    height: 200,
    marginTop: 25,
    overflow: "hidden",
  },
  promoContainer: {
    height: 200,
  },
  promoTextButtonContainer: {
    // borderWidth: 1,
    // borderColor: 'black',
    width: '50%',
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promoText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24
  }, 
  promoOffText: {
    fontSize: 26
  },
  promoTextSmall: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14
  },
  premiumContainer:{
    backgroundColor: 'tomato',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    marginTop: 10
  },
  premiumText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
