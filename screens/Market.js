import React, {useState} from 'react';
import { StyleSheet, Text, View } from "react-native";
import { CryptoAsset } from "../components/CryptoAsset";
import { Searchbar } from "react-native-paper";
import { Greeting } from "../components/Greeting";

let dummyCryptoData = [
  {
    id: Math.random(),
    cryptoName: "Bitcoin",
    cryptoWorth: 26652.90,
    image: require("../assets/bitcoin.png"),
    cryptoPercetageAction: "4.73%",
  },
  {
    id: Math.random(),
    cryptoName: "Ethereum",
    cryptoWorth: 1800.10,
    image: require("../assets/eth.png"),
    cryptoPercetageAction: "2.33%",
  },
  {
    id: Math.random(),
    cryptoName: "Cardano",
    cryptoWorth: .36,
    image: require("../assets/cardano.png"),
    cryptoPercetageAction: "6.73%",
  },
  {
    id: Math.random(),
    cryptoName: "Gala",
    cryptoWorth: .03,
    image: require("../assets/gala.png"),
    cryptoPercetageAction: "7.25%",
  },
  {
    id: Math.random(),
    cryptoName: "Tether",
    cryptoWorth: 1.00,
    image: require("../assets/tether.png"),
    cryptoPercetageAction: "7.25%",
  },
  {
    id: Math.random(),
    cryptoName: "BNB",
    cryptoWorth: 305.68,
    image: require("../assets/bnb.png"),
    cryptoPercetageAction: "7.25%",
  },
  {
    id: Math.random(),
    cryptoName: "XRP",
    cryptoWorth: .46,
    image: require("../assets/xrp.png"),
    cryptoPercetageAction: "7.25%",
  },
  {
    id: Math.random(),
    cryptoName: "Polygon",   
    cryptoWorth: .85,
    image: require("../assets/matic.png"),
    cryptoPercetageAction: "7.25%",
  },
  {
    id: Math.random(),
    cryptoName: "Solana",
    cryptoWorth: 19.55,
    image: require("../assets/solana.png"),
    cryptoPercetageAction: "7.25%",
  },
];

export const Markets = () => {
  const [data, setData] = useState(dummyCryptoData);

  let filteredData = data;
  const onChangeSearch = (e) => {
    console.log(e)
    filteredData = data.filter((coin) => coin.cryptoName.includes(e.toLowerCase()))
    console.log(filteredData)
    setData(filteredData)
  } 

  return (
    <View style={styles.container}>
      <View style={styles.greetingContainer}>
        <Greeting />
      </View>

      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search Crypto or NFTs..."
          placeholderTextColor='white'
          style={styles.bckGrnd}
          color="white"
          iconColor="white"
          onChangeText={onChangeSearch}
          // value="Search Crypto or NFTs..."
        />
      </View>

      <View>
        {filteredData.map((data) => (
          <CryptoAsset
            key={data.id}
            image={data.image}
            cryptoName={data.cryptoName}
            cryptoQuantity={data.cryptoQuantity}
            cryptoWorth={data.cryptoWorth}
            cryptoPercetageAction={data.cryptoPercetageAction}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingLeft: 15,
    paddingRight: 15,
  },
  greetingContainer: {
    marginTop: "12%",
    marginBottom: 20,
    height: "7%",
  },
  balanceContainer: {
    // borderWidth: 2,
    // borderColor: "red",
  },
  totalBalanceText: {
    color: "grey",
    fontSize: 18,
  },
  balanceNumber: {
    color: "white",
    fontSize: 24,
    marginTop: 4,
    fontWeight: "bold",
  },
  cryptoAssetHeadingContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  cryptoAssetText: {
    color: "white",
    fontSize: 24,
    marginTop: 4,
    fontWeight: "600",
  },
  bckGrnd: {
    backgroundColor: "#1e1d1d",
    color: "white",
  },
});
