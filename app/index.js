import { StyleSheet, Text, View } from "react-native";
import {P_Inicial} from "./src/P_Inicial/";

export default function Page() {
  return (
    <View style={styles.container}> 
      <P_Inicial />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});