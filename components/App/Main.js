import { useState } from 'react';
import RemoveList from '../Icons/RemoveList';
import SaveList from '../Icons/SaveList';
import PlusCircle from '../Icons/PlusCircle';
import { StyleSheet, View, SafeAreaView, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import GroceryItem from "/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/components/App/GroceryItem.js"
import { auth } from "/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/firebase.js"
import { firebase } from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, push} from "firebase/database";

function Main() {

  const [listOfItems, setListofItems] = useState([

  ])

  const user = getAuth().currentUser;

  const [placeholder, setPlaceHolder] = useState("Add Item to the list")

  const [enteredItemText, setEnteredItemText] = useState("")

  const [enteredTitle, setTitle] = useState("")

  function listInputHandler(enteredText) {
    setEnteredItemText(enteredText)
  }

  function titleInputHandler(enteredTitle) {
    setTitle(enteredTitle)
  }

  function addItemHandler() {

    if (enteredItemText !== "" && isNaN(enteredItemText) !== false && !listOfItems.some((item) => { return item.text === enteredItemText })) {
      let withNoDigits = enteredItemText.replace(/[0-9]/g, '');

      const newItem = {
        key: Math.random(),
        text: withNoDigits,
        completed: false
      }

      setListofItems((prevListOfItems) => [...prevListOfItems, newItem])
      setEnteredItemText("")
      setPlaceHolder("Add Item to the list")

    }

    else {
      Alert.alert("Error", "Please enter a string.")
      setEnteredItemText("")
      setPlaceHolder("Please type the name of an item")
    }

  }


  function deleteItemHandler(text) {
    setListofItems(currentListOfItems => { return currentListOfItems.filter((item) => item.text !== text) })
  }

  const checked = (key) => {
    const updatedItem = listOfItems.map((item) => {
      if (item.key === key) {
        return { ...item, completed: true }
      }
      return item;
    })
    setListofItems(updatedItem)
  }

  const deleted = (originalItemKey) => {
    const updatedList = listOfItems.filter(item => item.key !== originalItemKey)
    setListofItems(updatedList)
  }

  const clearList = () => {
    Alert.alert("Confirm", "Clear Items?", [
      {
        text: "Yes",
        onPress: () => setListofItems([])
      },
      {
        text: "No"

      }
    ])

  }

  // const userEmail = auth.currentUser?.email
  // const noSpecialCharacters = userEmail.replace(/[^a-zA-Z0-9 ]/g, '')

  // function writeUserData(userEmail, name, list) {
  //   firebase.database().ref('users/' + userEmail ).child(name).push().set({
  //     shoppingList: {
  //       list
  //     },
  //     listName: name
  //   })
  // }

  function writeUserData( userEmail, name, list) {
    // // Create a new post reference with an auto-generated id
    const db = getDatabase();
    push(ref(db, 'users/' + userEmail), {
      listName: name,
      GroceryList: list,
    });
  }

  function storingDataHandler() {
    const userEmail = auth.currentUser?.email
    const noSpecialCharacters = userEmail.replace(/[^a-zA-Z0-9 ]/g, '');
    writeUserData(noSpecialCharacters, enteredTitle, listOfItems);
    setTitle("")
    setListofItems([])
    Alert.alert("List was saved successfully")
  }





  //Here, I'm using the onDelete prop to pass down the deleteHandler function to the GroceryItem component so that items are deleted when clicked

  return (


    <SafeAreaView style={{ flex: 1, backgroundColor: "#ededed" }}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", fontSize: 18, color: "black" }}>
          Shopping List:
        </Text>
        <TextInput
          style={styles.titleInput}
          value={enteredTitle}
          onChangeText={titleInputHandler}
          placeholder="Name" />
        <TouchableOpacity onPress={storingDataHandler} style={styles.saveIcon}>
          <SaveList />
        </TouchableOpacity>
        <TouchableOpacity onPress={clearList}>
          <RemoveList />
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 10, paddingBottom: 100 }}
          data={listOfItems}
          renderItem={({ item }) => (<GroceryItem myFunction={checked} myDeleteFunc={deleted} data={item} onDelete={deleteItemHandler}
          />)}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={enteredItemText}
            onChangeText={listInputHandler}
            placeholder={placeholder} />
        </View>
        <TouchableOpacity onPress={addItemHandler}>
          <View style={styles.iconContainer}>
            <PlusCircle />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  )

}


const styles = StyleSheet.create({
  header: {
    backgroundColor: "#E0E0E0",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  footer: {
    position: "absolute",
    bottom: 30,
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
  },
  saveIcon: {
    left: 20

  },
  titleInput: {
    backgroundColor: "#E0E0E0",
    marginLeft: 0,
    width: "32%",
    right: 20,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 0,
  }

});

export default Main;

