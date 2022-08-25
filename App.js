import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {

  //let myVariableId = Math.random() 

  const [enteredItemText, setEnteredItemText] = useState("")

  const [listOfItems, setListofItems] = useState([])

  function listInputHandler(enteredText) {
    setEnteredItemText(enteredText)
  }

  function addItemHandler() {
    setListofItems((currentListOfItems) => [...currentListOfItems, { text: enteredItemText, key: Math.random().toString() }]) //This is updating the old grocery list state based on the old grocery list state by appending a new enteredItemText
  }
  //every item in my array is now an object with these attributes, entered text and a key
  //At the bottom, we have to do itemData.item.text to access the data attribute of the object


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} onChangeText={listInputHandler} placeholder="Add Item to the list" />
        <Button title="Add Item" onPress={addItemHandler} />
      </View>
      <View style={styles.listContainer}>
        <FlatList data={listOfItems} alwaysBounceVertical={false} renderItem={(itemData) => {
          return (<View style={styles.itemListStyles} >
            <Text style={styles.textFontColor}>{itemData.item.text}</Text> 
          </View>)
        }}>

        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#1e90ff",
    flex: 1
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: "70%",
    padding: 8
  },
  listContainer: {
    flex: 5
  },
  itemListStyles: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#1e90ff",
    color: "white",
  },
  textFontColor: {
    color: "white",
  }
});
