import { StyleSheet, Text, View } from 'react-native';
import { Greeting } from '../components/Greeting';
import { MostPop } from '../components/MostPop';
import { MusicCategory } from '../components/MusicCategory';
import { Promo } from '../components/Promo';

let dummyData = [
  {
    id: Math.random(),
    Title: "Shape of You",
    downloadNumber: '3.4 M',
    image: require("../assets/rock1.jpg"),
  },
  {
    id: Math.random(),
    Title: "Shape of You",
    downloadNumber: '3.4 M',
    image: require("../assets/rock1.jpg"),
  },
  {
    id: Math.random(),
    Title: "Shape of You",
    downloadNumber: '3.4 M',
    image: require("../assets/rock1.jpg"),
  },
  {
    id: Math.random(),
    Title: "Shape of You",
    downloadNumber: '3.4 M',
    image: require("../assets/rock1.jpg"),
  },
];
export const Home = () => {
  let image = require("../assets/guitar.jpeg");
  let image1 = require("../assets/vrheadset.jpeg");
  let image2 = require("../assets/crypto_fiat.jpeg");
  let image3 = require("../assets/counseling.jpeg");

  return (
<View style={styles.container}>
      <View style={styles.greetingContainer}>
        <Greeting/>
      </View>
      
      <View>
        <Promo />
      </View>
      <View>
        <MostPop/>
      </View>
      <View style={styles.mostPopContainer}>
        <MusicCategory rockImage={image} title="Music NFTs"/>
        <MusicCategory rockImage={image1} title="Metaverse"/>
      </View>
      <View style={styles.mostPopContainer}>
        <MusicCategory rockImage={image2} title="Crypto vs Fiat"/>
        <MusicCategory rockImage={image3} title="Crypto Help"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingLeft: 25,
    paddingRight: 25
    
  },
  greetingContainer:{
    marginTop: '10%',
    // backgroundColor: 'blue',
    height: '7%',
  },
  searchContainer: {},
  mostPopContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
    // borderColor: 'white',
    marginTop: 16
  }
});
