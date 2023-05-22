import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const MusicCategory = ({rockImage, title}) => {
 
  return (
    <View>
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
    height: 210,
    borderWidth: 2,
    // borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 10,
    borderWidth: 2,
  },
  titleDownloadContainer:{
   justifyContent: 'flex-start',
  //  textAlign: 'left',
   width: '100%'
  },
  title:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
