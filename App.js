import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import GroceryItem from './components/GroceryItem';
import ItemInput from './components/ItemInput';

export default function App() {

  const [listOfItems, setListofItems] = useState([])

  const [modalIsVisible, setModalisVisible] = useState(false)

  function startAddItemHandler(){
    setModalisVisible(true)
  }

  function endAddItemHandler(){
    setModalisVisible(false)
  }

  function addItemHandler(enteredItemText) {
   
    setListofItems((currentListOfItems) => [...currentListOfItems, { text: enteredItemText, key: Math.random().toString() }]) //This is updating the old grocery list state based on the old grocery list state by appending a new enteredItemText
    setModalisVisible(false)

  }

  //every item in my array is now an object with these attributes, entered text and a key
  //At the bottom, we have to do itemData.item.text to access the data attribute of the object

  function deleteItemHandler(text){
    setListofItems(currentListOfItems => { return currentListOfItems.filter((item) => item.text !== text)})
  }

  //Here, I'm using the onDelete prop to pass down the deleteHandler function to the GroceryItem component so that items are deleted when clicked

  return (
    <View style={styles.container}>
      <Button title="Add new Item" color="#1e90ff" onPress={startAddItemHandler}/>
      <ItemInput visible={modalIsVisible} onAddInput={addItemHandler} onCancel={endAddItemHandler}/>
      <View style={styles.listContainer}>
        <FlatList data={listOfItems} alwaysBounceVertical={false} renderItem={(itemData) => {
          return (<GroceryItem text={itemData.item.text} id={itemData.item.text} onDelete={deleteItemHandler}/>)
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
