// import { Icon } from 'react-native-vector-icons';
//import { style } from '@mui/system';

import { useState } from 'react';
import RemoveList from './Icons/RemoveList';
import SaveList from './Icons/SaveList';
import IconPlus from './Icons/IconPlus';
import PlusCircle from './Icons/PlusCircle';
import { StyleSheet, View, SafeAreaView, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import GroceryItem from "/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/components/GroceryItem.js"
import ItemInput from "/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/components/ItemInput.js"

//test comment to make sure I'm still on firebase branch

//you can only delete them off the list once you have checked them off

function Main() {

  const [listOfItems, setListofItems] = useState([
    
    {id:1, text:"Tacos", completed: true},
    {id:2, text:"Cheese", completed: false}
  ])

  const [placeholder, setPlaceHolder] = useState("Add Item to the list")

  const [enteredItemText, setEnteredItemText] = useState("")

    function listInputHandler(enteredText) {
        setEnteredItemText(enteredText)
    }

  function addItemHandler(enteredItemText) {

    // I have tried find and some, but I can't get the darn thing from taking in duplicate items

    if (enteredItemText !== "" && isNaN(enteredItemText) !== false && !listOfItems.some((item) => { return item.text === enteredItemText })) {
      let withNoDigits = enteredItemText.replace(/[0-9]/g, '');
      setListofItems((currentListOfItems) => [...currentListOfItems, { text: withNoDigits, key: Math.random().toString() }]) //This is updating the old grocery list state based on the old grocery list state by appending a new enteredItemText
      setPlaceHolder("Add Item to the list")
      setEnteredItemText("")
    }
    else {
      setPlaceHolder("Please type the name of an item")
    }
  }

  //every item in my array is now an object with these attributes, entered text and a key
  //At the bottom, we have to do itemData.item.text to access the data attribute of the object

  function deleteItemHandler(text) {
    setListofItems(currentListOfItems => { return currentListOfItems.filter((item) => item.text !== text) })
  }

  //Here, I'm using the onDelete prop to pass down the deleteHandler function to the GroceryItem component so that items are deleted when clicked

  return (


    <SafeAreaView style={{ flex: 1, backgroundColor: "#ededed" }}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
          Shopping List
        </Text>
        <RemoveList />
      </View>
      <View style={styles.listContainer}>
        <FlatList 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding:20, paddingBottom:100}}
        data={listOfItems} renderItem={(itemData) => {
          return (<GroceryItem text={itemData.item.text} completed={itemData.item.completed} id={itemData.item.text} onDelete={deleteItemHandler} />)
        }}>
        </FlatList>
      </View>
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput 
          style={styles.textInput} 
          value={enteredItemText} 
          onChangeText={listInputHandler} 
          placeholder={placeholder} />
        </View>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <PlusCircle onPress={addItemHandler} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>




    //{/* //   <View style={styles.container}>
    //   <Button title="Add new Item" color="#1e90ff" onPress={startAddItemHandler}/>
    //   <ItemInput placeHolderChanger={placeholder} onAddInput={addItemHandler} onCancel={endAddItemHandler}/>
    //   <View style={styles.listContainer}>
    //     <FlatList data={listOfItems} alwaysBounceVertical={false} renderItem={(itemData) => { */}
    //{/* //       return (<GroceryItem text={itemData.item.text} id={itemData.item.text} onDelete={deleteItemHandler}/>)
    //     }}>
    //     </FlatList> */}
    //{/* //   </View> */}
    //{/* // </View> */}


  )

}


const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    color: "#fff"
  },
  inputContainer: {
    backgroundColor: "#fff",
    elevation: 40,
    flex: 1,
    height: 50,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    paddingHorizontal: 10,
    padding: 5
  },
  iconContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    elevation: 40,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#ededed"
  },
  textInput: {
    backgroundColor: "#fff",
    borderColor: "#fff",
    backgroundColor: "#fff",
    flex: 1,
    height: 50,
    paddingHorizontal: 20,
  },
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

 // function addInputHandler(){
    //     onAddInput(enteredItemText)
    //     setEnteredItemText("")
    // }

  //This placeholder state editor above is tho display a different message if an empty string is submitted by the user
  //isNan checks if input is a number, returns false if it is 



// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       paddingTop: 50,
//       paddingHorizontal: 16
//     },
//     listContainer: {
//       flex: 5,
//     }
//   });