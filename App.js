import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import InputTextField from './components/InputTextField';
import ListAllText from './components/ListAllText';


export default function App() {
  const [textList, setTextList] = useState([]);

  const addUpdatedText = titleText => {
    setTextList((currentList) => [...currentList, {id: Math.random().toString(), value: titleText}]);
  };

  return (
    <View>
      <InputTextField onAddText={addUpdatedText}/>
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={textList} 
      renderItem={itemData => (<ListAllText title={itemData.item.value}/>)} />
    </View>
  );
}
