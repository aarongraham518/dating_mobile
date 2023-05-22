import { StyleSheet, Text, View } from "react-native";
import { Chart } from "../components/Chart";
import { CryptoAsset } from "../components/CryptoAsset";
import { Greeting } from "../components/Greeting";

let dummyCryptoData = [
  {
    id: Math.random(),
    cryptoName: "Bitcoin",
    cryptoQuantity: "3.9 BTC",
    cryptoWorth: 112490.82,
    image: require("../assets/bitcoin.png"),
    cryptoPercetageAction: '4.73%'
  },
  {
    id: Math.random(),
    cryptoName: "Ethereum",
    cryptoQuantity: "1.7 ETH",
    cryptoWorth: 3267.41,
    image: require("../assets/eth.png"),
    cryptoPercetageAction: '2.33%'
  },
  {
    id: Math.random(),
    cryptoName: "Cardano",
    cryptoQuantity: "227 ADA",
    cryptoWorth: 232.82,
    image: require("../assets/cardano.png"),
    cryptoPercetageAction: '6.73%'
  },
  {
    id: Math.random(),
    cryptoName: "Gala",
    cryptoQuantity: "10,000 Gala",
    cryptoWorth: 400.82,
    image: require("../assets/gala.png"),
    cryptoPercetageAction: '7.25%'
  },
];

export const Assets = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greetingContainer}>
        <Greeting />
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.totalBalanceText}>Total Balance</Text>
        <Text style={styles.balanceNumber}>$125,098.36</Text>
      </View>

      <View style={styles.chartContainer}>
        <Chart />
      </View>
      <View style={styles.cryptoAssetHeadingContainer}>
        <Text style={styles.cryptoAssetText}>Crypo Assets</Text>
        </View>

      <View>
        {dummyCryptoData.map((data) => (
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
    marginBottom: 10
  }, 
  cryptoAssetText: {
    color: "white",
    fontSize: 24,
    marginTop: 4,
    fontWeight: "600",
  },
  chartContainer:{
    marginTop: 20
  }
});
