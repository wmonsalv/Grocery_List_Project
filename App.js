import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

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
        <TextInput style={styles.textInput} onChangeText={listInputHandler} placeholder="Add Item to the list" />
        <Button title="Add Item" onPress={addItemHandler} />
      </View>
      <View style={styles.listContainer}>
        <ScrollView>
          {listOfItems.map((eachItem) => (
            <View key={eachItem} style={styles.itemListStyles} >
              <Text style={styles.textFontColor}>{eachItem}</Text>
            </View>
          ))}
        </ScrollView>
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
