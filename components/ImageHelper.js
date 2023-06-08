import { StyleSheet, View, Text, Image } from "react-native";

// let image = require(`../assets/bret.png`);
export const ImageHelper = ({ id}) => {
  // let userImage = require(`../assets/${userName.toLowerCase()}.png`);
  let imageSource = null;

  if(id == 1){ 
    imageSource = require('../assets/bret.png');
  }else if(id == 2){
    imageSource = require('../assets/max.png');
  }else if(id == 3){
    imageSource = require('../assets/antonette.png');
  }else if(id == 4){
    imageSource = require('../assets/patricia.png');
  }else if(id == 5){
    imageSource = require('../assets/chelsey.png');
  }else if(id == 6){
    imageSource = require('../assets/mrsdennis.png');
  }else if(id == 7){
    imageSource = require('../assets/kurtis.png');
  }else if(id == 8){
    imageSource = require('../assets/nicholas.png');
  }

  return  <Image source={imageSource} style={styles.image} />
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "grey",
  },
});
