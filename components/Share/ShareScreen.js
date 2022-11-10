import { useNavigation } from "@react-navigation/native"
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Pressable, TextInput, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useState, useEffect } from "react"
import { getDatabase, ref, child, get, push } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import db from "/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/firebase.js"
import Share from "../Icons/Share"



const ShareScreen = ({route}) => {

   
const [selectedParty, setSelectedParty] = useState("")

const [FirebaseList, setFirebaseList] = useState([])

let currentListName = route.params.listName

let docID = route.params.docId

function titleInputHandler(selectedParty) {
    setSelectedParty(selectedParty)
  }

const user = getAuth();

const userEmail = user.currentUser?.email // <-- i did this to retrieve the user name so that we can use it for the path of the delete function

const noSpecialCharacters = userEmail.replace(/[^a-zA-Z0-9 ]/g, '') 

const dbRef = ref(getDatabase());
get(child(dbRef, "users/" + noSpecialCharacters + "/" + docID )).then((snapshot) => {
  if (snapshot.exists()) {
    let data = snapshot.val()
    let list = data.GroceryList
    setFirebaseList(list)

  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

function shareData(user, listName, list){
        // // Create a new post reference with an auto-generated id
        const db = getDatabase();
        const noSpecialCharacters = selectedParty.replace(/[^a-zA-Z0-9 ]/g, '') 
        push(ref(db, 'users/' + noSpecialCharacters), {
          listName: currentListName,
          GroceryList: list,
        });
}

function sharingFunctionHandler(){
    shareData(userEmail, currentListName, FirebaseList)
    setSelectedParty("")
    setFirebaseList([])
    Alert.alert("List was shared successfully")
}



return(

<SafeAreaView>
<View style={styles.header}>
    <Text>Please enter an email address:</Text>
</View>
<View style={styles.header}>
<TextInput
    style={styles.inputContainer}
    value={selectedParty}
    onChangeText={titleInputHandler}
    placeholder="someEmail@gmail.com" />
<TouchableOpacity onPress={sharingFunctionHandler}>
<Share/>
</TouchableOpacity>
</View>

</SafeAreaView>
)

}


export default ShareScreen

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#E0E0E0",
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        bottom: 60
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

    })