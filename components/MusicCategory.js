import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const MusicCategory = ({rockImage, title}) => {
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={rockImage} />
      <View style={styles.titleDownloadContainer}>
        <Text style={styles.title}>{title}</Text>
        <View>
          {/* <Ionicons name="arrow-down" color={"white"} size={28} /> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: 150,
    height: 220,
    borderWidth: 2,
    // borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 10,
    borderWidth: 2,
  },
  titleDownloadContainer:{
    // borderWidth: 2,
    // borderColor: 'white'
  },
  title:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  }
});
