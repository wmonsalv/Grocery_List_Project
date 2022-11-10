import { View, Text, StyleSheet, TouchableOpacity, Alert} from "react-native"
import { useNavigation } from "@react-navigation/native"
import Share from "../Icons/Share"
import RemoveList from '../Icons/RemoveList';
import firebase from "/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/firebase.js"
import { getDatabase, ref, child, get, remove } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

//custom component that is rendered with the list title on the personalized list component 

function UserLists(props) {

    const navigation = useNavigation()

    const [fireBaseSnap, setFireBaseSnap] = useState([])

    const user = getAuth();

    const userEmail = user.currentUser?.email // <-- i did this to retrieve the user name so that we can use it for the path of the delete function

    const noSpecialCharacters = userEmail.replace(/[^a-zA-Z0-9 ]/g, '') // <-- removes special characters so that we are able to follow the path of our doc

    const id = props.snap.docId //gives me current doc id

    //console.log(props.snap.docId)
    

    useEffect(() => { //I'm doing it for each, because it acts up when I do two state changes at once during a set state operation. This one is supposed to print out grocery items on each list.

        const dbRef = ref(getDatabase());
        get(child(dbRef, 'users/' + noSpecialCharacters)).then((snapshot) => {
            snapshot.forEach(childSnapShot => {
                let data = childSnapShot.val()
                let keyName = childSnapShot.key
                let groceryList = data.GroceryList
                let listName = data.listName
                setFireBaseSnap((prevListOfItems) => [...prevListOfItems, { name: listName, list: groceryList, key: keyName }])
                
            })
        })

    }, [])


    let filteredList = fireBaseSnap.filter((item) => item.name === props.listNames) // All of these ops are done so that I can delete a doc based 

    let objectArray = filteredList.map(item => item.key) 

    let docId = objectArray[0]

    function deleteHandler(){
        //  remove(ref(dbRef, `/${id}`)) < --- doesn't work
        // remove(ref(db, 'users/' + noSpecialCharacters).child(id)) < --- doesn't work
         const db = getDatabase();
         remove(ref(db, 'users/' + noSpecialCharacters +  "/" + docId)) // <-- this works (finally starting to get an idea of how to access documents in firebase)!!!
         props.onDelete(props.listNames)
         Alert.alert("List was deleted successfully")
        }

    // function deleted(){
    //     props.myDeleteFunc(props.listNames)
    //     }


    return (
        <View style={styles.itemListStyles} >
            <View style={{ flex: 1 }}>
                <Text onPress={() => navigation.navigate("User list Data", {listName: props.listNames, snap: props.snap})} style={styles.textFontColor}>{props.listNames}</Text>
            </View>
            <TouchableOpacity onPress={deleteHandler}>
            <RemoveList />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Share Screen", {listName: props.listNames, snap: props.snap, docId:props.keys})}>
            <Share/>
            </TouchableOpacity>
        </View>
    )
}



export default UserLists

const styles = StyleSheet.create({
    itemListStyles: {
        margin: 4,
        padding: 10,
        borderRadius: 7,
        backgroundColor: "#27963C",
        color: "white",
        flexDirection: "row",
        elevation: 12,
        marginVertical: 10,
        textAlign:"center"

    },
    pressedItem: {
        opacity: 0.5,
        color: "red"
    },
    textFontColor: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
    },
})