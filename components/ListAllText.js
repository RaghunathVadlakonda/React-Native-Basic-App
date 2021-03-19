import React, {useState} from 'react';
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

const ListAllText = props => {
    
    return (
        <View style={styles.texts}><Text>{props.title}</Text></View>
    )
}

    const styles = StyleSheet.create({
        texts: {
            padding: 10,
            backgroundColor: "blue",
            borderColor: "black",
            margin: 10
          }
    })


export default ListAllText;