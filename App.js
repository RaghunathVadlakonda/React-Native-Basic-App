import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');

  const updateInputText = (enterText) => {
    setInputText(enterText);
  }

  const addUpdatedText = () => {
    console.log("text updated!");
  }

  return (
    <View>
      <View style={styles.container}>
        <TextInput 
         placeholder="Please Enter Your Text" 
         style={styles.inputField}
         onChangeText={updateInputText}
         value={inputText}
          />

        <Button title="Add" onPress={addUpdatedText} color="dodgerblue"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 40,
    paddingLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  inputField: {
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1.5,
    width: '80%',
    padding: 1
  }
});
