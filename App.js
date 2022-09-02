import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import GroceryItem from './components/GroceryItem';
import ItemInput from './components/ItemInput';

export default function App() {

  //let myVariableId = Math.random() 

  const [listOfItems, setListofItems] = useState([])

  function addItemHandler(enteredItemText) {
    setListofItems((currentListOfItems) => [...currentListOfItems, { text: enteredItemText, key: Math.random().toString() }]) //This is updating the old grocery list state based on the old grocery list state by appending a new enteredItemText
  }
  //every item in my array is now an object with these attributes, entered text and a key
  //At the bottom, we have to do itemData.item.text to access the data attribute of the object


  return (
    <View style={styles.container}>
      <ItemInput onAddInput={addItemHandler}/>
      <View style={styles.listContainer}>
        <FlatList data={listOfItems} alwaysBounceVertical={false} renderItem={(itemData) => {
          return (<GroceryItem text={itemData.item.text}/>)
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
  listContainer: {
    flex: 5
  }
});
