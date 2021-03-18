import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [textList, setTextList] = useState([]);

  const updateInputText = (enterText) => {
    setInputText(enterText);
  }

  const addUpdatedText = () => {
    // console.log("text updated!");
    setTextList((enteredText) => [...enteredText, {key: Math.random().toString(), value: inputText}])
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
      <FlatList data={textList} renderItem={itemData => (<View style={styles.texts}><Text>{itemData.item.value}</Text></View>)} />
      {/* <ScrollView>
        {textList.map(text => <View key={text} style={styles.texts}><Text>{text}</Text></View>)}
      </ScrollView> */}
    </View>
  );
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
  texts: {
    padding: 10,
    backgroundColor: "blue",
    borderColor: "black",
    margin: 10
  }
});
