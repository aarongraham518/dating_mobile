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
  let image = require("../assets/rock1.jpg");
  let image1 = require("../assets/rock1.jpg");
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
        <MusicCategory rockImage={image} title="Shape of You"/>
        {/* <MusicCategory rockImage={image1}/> */}
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
    marginTop: '12%',
    marginBottom: 25,
    // backgroundColor: 'blue',
    height: '7%',
  },
  searchContainer: {},
  mostPopContainer:{
    // justifyContent: 'space-between',
    flexWrap: 'wrap',
    // borderWidth: 1,
    // borderColor: 'white'
  }
});
