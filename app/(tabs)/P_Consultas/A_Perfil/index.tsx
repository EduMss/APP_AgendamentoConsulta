import { StyleSheet, Text, View , Image } from "react-native";

export function A_Perfil() {
  return (
    <View style={styles.fundoCima} >
        <View style={styles.container}>
            <Image style={styles.imagePerfil} source={require('@/assets/images/foto-perfil.png')} />
            <Text style={styles.NomePerfil}>Eduardo Matheus</Text>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
    fundoCima:{
        flex: 1,
        backgroundColor: "#66A4FF",
        width: 500,
        maxHeight: 400,
        alignItems: "center",
        top: -200,
    },
    container: {
        backgroundColor: "#0066FF",
        borderRadius: 24, // Borda arredondada
        alignItems: 'center',
        justifyContent: 'center',
        top: 230,
        width: 350,
        height: 200,
    },
    NomePerfil: {
        fontSize: 28,
        fontWeight: "bold",
        top: 10,
        left: -30,
    },
    imagePerfil: {
        width: 90,
        height: 90,
        borderRadius: 50,
        left: -100,
        top: -10,
    },

});
