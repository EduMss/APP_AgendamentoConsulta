import { StyleSheet, Text, View } from "react-native";
import {A_Perfil} from  "@/AssetsComponentes/A_Perfil";  //"./A_Perfil";
import A_ListaConsultas from '@/AssetsComponentes/A_ListaConsultas';

const P_Consultas = () => {
  return (
    <View style={styles.container}>
        <A_Perfil /> 
        <Text style={styles.title}>Agendar Consulta</Text>
        <A_ListaConsultas />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    //top:-165,
    top: -15,
    //left: -40,
    left: '-10%',
    //left: '-1em',
  
  },
  A_ListaConsultas: {

  },
});


export default P_Consultas;