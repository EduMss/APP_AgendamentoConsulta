import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';


const P_Agenda = () => {
//export default function P_Agenda() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});


export default P_Agenda;