import { StyleSheet, View, Text, Image } from "react-native";

export const CryptoAsset = ({ cryptoName, cryptoQuantity, image, cryptoWorth, cryptoPercetageAction}) => {
  // let image = require("../assets/bitcoin.png");
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>

      <View style={styles.cryptoNamePriceContainer}>
        <View style={styles.cryptoNameQtyContainer}>
          <Text style={!cryptoQuantity ? styles.cryptoNamePush : styles.cryptoName}>{cryptoName}</Text>
          <Text style={styles.cryptoQty}>{cryptoQuantity}</Text>
        </View>

        <View style={styles.cryptoAssetWorthActionContainer}>
          <Text style={styles.cryptoWorth}>${cryptoWorth.toFixed(2)}</Text>

          <Text style={styles.cryptoAction}>{cryptoPercetageAction}</Text>
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
  cryptoNamePriceContainer: {
    flexDirection: "row",
    flexGrow: 1,
    marginLeft: 10,
    justifyContent: "space-between",
    // borderWidth: 4,
    // borderColor: "red",
  },
  cryptoNameQtyContainer: {
    // borderWidth: 2,
    // borderColor: "green",
  },
  cryptoNamePush: {
    color: "white",
    fontSize: 22,
    fontWeight: "500",
    position: 'relative',
    top: 10
  },
  cryptoName: {
    color: "white",
    fontSize: 22,
    fontWeight: "500",
  },
  cryptoQty: {
    color: "grey",
    fontSize: 16,
    fontWeight: "600",
  },
  cryptoAssetWorthActionContainer: {
    alignItems: "flex-end",
    // borderWidth: 4,
    // borderColor: "pink",
  },
  cryptoWorth: {
    color: "white",
    fontSize: 22,
    fontWeight: "500",
  },
  cryptoAction: {
    color: "red",
    fontSize: 18,
    fontWeight: "600",
  },
});
