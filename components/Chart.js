import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export const Chart = () => {
    const screenWidth = Dimensions.get("window").width;

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 200, 99, 70],
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
            strokeWidth: 3 // optional
          }
        ],
        legend: ["Price Action"] // optional
      };
      
      const chartConfig = {
        backgroundGradientFrom: "#3207f4",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#130c08",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        // xAxisLabel: {
        //     fontSize: 20
        // }
      };
  return (
    <View>
      <LineChart
        data={data}
        width={screenWidth}
        height={256}
        verticalLabelRotation={30}
        chartConfig={chartConfig}
        bezier
      />
    </View>
  );
};
