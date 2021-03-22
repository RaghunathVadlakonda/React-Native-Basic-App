import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import InputTextField from './components/InputTextField';
import ListAllText from './components/ListAllText';


export default function App() {
  const [textList, setTextList] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);

  const addUpdatedText = titleText => {
    setTextList((currentList) => [...currentList, {id: Math.random().toString(), value: titleText}]);
    setIsAddModal(false);
  };

  const removeSeletedText = textId => {
    setTextList(currentList => {
      return currentList.filter((text) => text.id !== textId);
    });
  };

  return (
      <View style={styles.screen}>
        <Button title="Open Madal" onPress={() => setIsAddModal(true)}/>
        <InputTextField visible={isAddModal} onAddText={addUpdatedText}/>
        <FlatList 
        keyExtractor={(item, index) => item.id}
        data={textList} 
        renderItem={itemData => (<ListAllText id={itemData.item.id} onDelete={removeSeletedText} title={itemData.item.value}/>)} />
      </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
