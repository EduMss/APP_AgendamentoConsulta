import { StyleSheet, Text, View } from "react-native";
import {A_Perfil} from "./A_Perfil";

export function P_Inicial() {
  return (
    <View style={styles.container}>
        <A_Perfil style={styles.A_Perfil} />
        <Text style={styles.title}>Agendar Consulta</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    //justifyContent: "center",
    //alignItems: "start",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    top:-165,
    left: -40,
  },
  A_Perfil: {

  },
});

