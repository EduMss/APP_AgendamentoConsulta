import React from 'react';
import { Tabs } from 'expo-router';
import { Image } from 'react-native';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

//Usando Icones do proprio Expo
// import Colors from '@/constants/Colors';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
// import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabLayout = () => {
  return (
    <Tabs
      initialRouteName="index" // Define a página inicial
      screenOptions={{
        tabBarActiveTintColor: 'black',//Quando estiver selecionado, o label vai ficar preto
        tabBarInactiveTintColor: 'white',//Quando não estiver selecionado, o label vai ficar branco
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: {
          backgroundColor: '#0066FF',// mudando cor de fundo da Navigate bar
          height: "15%",//100, //mudando o tamanho do navigate bar
          maxHeight: 100,
        }, 
      }}>
      <Tabs.Screen
        name="P_Agenda"
        options={{
          title: 'Agenda',
          //Usando Icones pesonalizado
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('@/assets/images/conta.png') //icone quando não está selecionado
                  : require('@/assets/images/contaSelecionado.png') //icone quando está seleciona
              }
              style={{ width: 40, height: 40, marginTop: "10%", marginBottom: "5%"}}//, marginTop: 25, marginBottom: 10}} //Tamanho do icone
            />
          ),
          tabBarLabelStyle: { //Style do Label
            fontSize: 16, //tamanho da fonte
            paddingBottom: "5%",//paddingBottom: 10, //deixar o espaço em baixo do label para não ficar colado na parte de baixo
            fontWeight: 'bold' //deixar a fonte mais grossa
          },
          headerShown: false,  // Remove o cabeçalho da tela Settings
        }}
      />
      <Tabs.Screen
        //name="P_Consultas/index" //component={P_Consultas} //nome do .tsx(ou um dirtetório) que ele vai buscar dentro do diretório
        name="index" //component={P_Consultas} //nome do .tsx(ou um dirtetório) que ele vai buscar dentro do diretório
        options={{
          title: 'Consultas', //Titulo do label que fica abaixo do icone

          //Usando Icones do proprio Expo
          // tabBarIcon: ({ color }) => <MaterialIcons name="healing" size={28} color={color} />,

          //Usando Icones pesonalizado
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('@/assets/images/farmacia.png') //icone quando não está selecionado
                  : require('@/assets/images/farmaciaSelecionado.png') //icone quando está seleciona
              }
              style={{ width: 40, height: 40, marginTop: "10%", marginBottom: "5%"}} //Tamanho do icone
            />
          ),
          tabBarLabelStyle: { //Style do Label
            fontSize: 16, //tamanho da fonte
            paddingBottom: "5%",//paddingBottom: 10, //deixar o espaço em baixo do label para não ficar colado na parte de baixo
            fontWeight: 'bold' //deixar a fonte mais grossa
          },
          headerShown: false,  // Remove o cabeçalho da tela Settings
        }}
      />
      <Tabs.Screen
        name="P_Notificacao"
        options={{
          title: 'Noticações',
          //Usando Icones pesonalizado
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('@/assets/images/sino.png') //icone quando não está selecionado
                  : require('@/assets/images/sinoSelecionado.png') //icone quando está seleciona
              }
              style={{ width: 40, height: 40, marginTop: "10%", marginBottom: "5%"}} //Tamanho do icone
            />
          ),
          tabBarLabelStyle: { //Style do Label
            fontSize: 16, //tamanho da fonte
            paddingBottom: "5%",//paddingBottom: 10, //deixar o espaço em baixo do label para não ficar colado na parte de baixo
            fontWeight: 'bold' //deixar a fonte mais grossa
          },
          headerShown: false,  // Remove o cabeçalho da tela Settings
        }}
      />
      </Tabs>
  );
}

export default TabLayout;