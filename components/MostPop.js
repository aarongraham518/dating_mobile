import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

export const MostPop = () => {    
    
    return (
        <View style={styles.mostPopContainer}>
            <Text style={styles.mostPopText}>Most Popular</Text>
            <View style={styles.premiumContainer}>
                <Text style={styles.premiumText}>View All</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mostPopContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15
    },
    mostPopText: {
        color: 'white',
        fontSize: 24,
        fontWeight: '500',    
    },
    premiumContainer:{
        backgroundColor: 'tomato',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        marginTop: 10
      },
      premiumText: {
        color: 'white',
        fontWeight: 'bold'
      }
});