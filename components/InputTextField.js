import React, {useState} from 'react';
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

const InputTextField = props => {
    const [inputText, setInputText] = useState('');
    
    const updateInputText = (enterText) => {
        setInputText(enterText);
      }

    return (
        <View style={styles.container}>
        <TextInput 
         placeholder="Please Enter Your Text" 
         style={styles.inputField}
         onChangeText={updateInputText}
         value={inputText}
          />

        <Button title="Add" onPress={props.onAddText.bind(this, inputText)} color="dodgerblue"/>
      </View>
    )
}

    const styles = StyleSheet.create({
        container: {
            paddingTop: 50,
            paddingBottom: 10,
            paddingHorizontal: 40,
            paddingLeft: 20,
            flexDirection: "row",
            justifyContent: "space-between"
          },
          inputField: {
            padding: 1,
            borderColor: "black",
            borderRadius: 5,
            borderWidth: 1.5,
            width: '80%',
          },
    })


export default InputTextField;