import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import A_BoxConsulta from '@/AssetsComponentes/A_BoxConsulta';
import { View } from '@/components/Themed';

export default function A_ListaConsultas() {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <A_BoxConsulta />
                <A_BoxConsulta />
                <A_BoxConsulta />
                <A_BoxConsulta />
                <A_BoxConsulta />
                <A_BoxConsulta />
                <A_BoxConsulta />
                <A_BoxConsulta />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        //width: 385,
        width: "105%",
        //height: 230,
        height: '30%',
    },
    container: {
        width: "100%",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: '#DEDFDF',
        borderRadius: 12,
      },
  });
  