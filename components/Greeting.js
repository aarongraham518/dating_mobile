import { StyleSheet, Text, View, Image } from "react-native";

export const Greeting = () => {
    let image = require("../assets/myavatar.png");
  return (
    <View style={styles.textImageContainer}>
      <View style={styles.greetingTextContainer}>
        <Text style={[styles.greetingTextColor, styles.greet1Text]}>Hello</Text>
        <Text style={[styles.greetingTextColor, styles.greetUserName]}>Aaron Graham</Text>
      </View>
      <View>
        <Image style={styles.image} source={image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textImageContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  greetingTextContainer:{
 
  },
  greetingTextColor:{
    color: 'white',
  },
  greet1Text:{
    fontSize: 18
  },
  greetUserName:{
    fontSize: 24,
    fontWeight: '500'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    // borderWidth: 3,
    // borderColor: 'purple',
  },
});
