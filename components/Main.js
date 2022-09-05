import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GroceryItem from "/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/components/GroceryItem.js"
import ItemInput from "/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/components/ItemInput.js"

function Main() {

const [listOfItems, setListofItems] = useState([])

const [modalIsVisible, setModalisVisible] = useState(false)

function startAddItemHandler(){
  setModalisVisible(true)
}

function endAddItemHandler(){
  setModalisVisible(false)
}

const [placeholder, setPlaceHolder] = useState("Add Item to the list")

//This placeholder state editor above is tho display a different message if an empty string is submitted by the user

function addItemHandler(enteredItemText) {
 
  if(enteredItemText !== "" || listOfItems.find((item) => {item.text !== enteredItemText})){
    setListofItems((currentListOfItems) => [...currentListOfItems, { text: enteredItemText, key: Math.random().toString() }]) //This is updating the old grocery list state based on the old grocery list state by appending a new enteredItemText
    setModalisVisible(false)
    setPlaceHolder("Add Item to the list")
  } 
  else{
    setPlaceHolder("Please type the name of an item")
  }
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
    <ItemInput placeHolderChanger={placeholder} visible={modalIsVisible} onAddInput={addItemHandler} onCancel={endAddItemHandler}/>
    <View style={styles.listContainer}>
      <FlatList data={listOfItems} alwaysBounceVertical={false} renderItem={(itemData) => {
        return (<GroceryItem text={itemData.item.text} id={itemData.item.text} onDelete={deleteItemHandler}/>)
      }}>
      </FlatList>
    </View>
  </View>
)

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 16
    },
    listContainer: {
      flex: 5,
    }
  });

export default Main;















// import Main from "/Users/william_x1/Documents/GitHub/Grocery_List_Project-test_branch/components/Main.js";
// 

// export default function App() {

//     const Stack = createNativeStackNavigator();

//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="Home" component={Main} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );



// }

