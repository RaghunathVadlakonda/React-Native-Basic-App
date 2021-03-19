import React, {useState} from 'react';
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View} from 'react-native';

const ListAllText = props => {
    
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.texts}><Text>{props.title}</Text></View>
        </TouchableOpacity>
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