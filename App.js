import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [enteredItemText, setEnteredItemText] = useState("")

  const [listOfItems, setListofItems] = useState([])

  function listInputHandler(enteredText) {
    setEnteredItemText(enteredText)
  }

  function addItemHandler() { 
    setListofItems((currentListOfItems) => [...currentListOfItems, enteredItemText]) //This is updating the old grocery list state based on the old grocery list state by appending a new enteredItemText
  }


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} onChange={listInputHandler} placeholder="Add Item to the list" />
        <Button title="Add Item" onPress={addItemHandler}/>
      </View>
      <View style={styles.listContainer}>
        {listOfItems.map((eachItem) => <Text>{eachItem}</Text>)}
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
  }
});
