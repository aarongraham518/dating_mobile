import { StyleSheet, Text, View } from 'react-native';
import { Greeting } from '../components/Greeting';
import { MostPop } from '../components/MostPop';
import { DatingCategory } from '../components/DatingCategory';
import { Promo } from '../components/Promo';


export const Home = () => {
  let image = require("../assets/singles.jpeg");
  let image1 = require("../assets/movies.jpeg");
  let image2 = require("../assets/dating.jpeg");
  let image3 = require("../assets/therapy.jpeg");

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
        <DatingCategory rockImage={image} title="Singles"/>
        <DatingCategory rockImage={image1} title="Movies Only"/>
      </View>
      <View style={styles.mostPopContainer}>
        <DatingCategory rockImage={image2} title="Dating 101"/>
        <DatingCategory rockImage={image3} title="Counseling"/>
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
