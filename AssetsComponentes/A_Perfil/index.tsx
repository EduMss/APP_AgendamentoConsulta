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
        // width: 500,
        width: "200%",
        // maxHeight: 400,
        maxHeight: '60%',
        alignItems: "center",
        //top: -200,
        top: -40,
    },
    container: {
        flex: 1,
        backgroundColor: "#0066FF",
        borderRadius: 24, // Borda arredondada
        alignItems: 'center',
        justifyContent: 'center',
        //top: 230,
        top:  70,
        // width: 350,
        // height: 200,
        width: '50%',
        height: '80%',
        maxHeight: '80%',
        maxWidth: '50%',
    },
    NomePerfil: {
        fontSize: 28,
        fontWeight: "bold",
        top: 10,
        left: '-10%',
    },
    imagePerfil: {
        width: 90,
        height: 90,
        borderRadius: 50,
        left: -100,
        //left: '1',
        //top: -10,
        top: -10,
    },

});
