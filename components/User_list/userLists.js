import { View, Text, StyleSheet, TouchableOpacity, Alert} from "react-native"
import { useNavigation } from "@react-navigation/native"
import Share from "../Icons/Share"
import RemoveList from '../Icons/RemoveList';
import firebase from "/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/firebase.js"
import { getDatabase, ref, child, get, remove } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

//custom component that is rendered with the list title on the personalized list component 

function UserLists(props) {

    const navigation = useNavigation()

    const user = getAuth();

    const userEmail = user.currentUser?.email // <-- i did this to retrieve the user name so that we can use it for the path of the delete function

    const noSpecialCharacters = userEmail.replace(/[^a-zA-Z0-9 ]/g, '') // <-- removes special characters so that we are able to follow the path of our doc

    const id = props.snap.docId //gives me current doc id

    //console.log(props.snap.docId)

    function deleteHandler(){
    //  remove(ref(dbRef, `/${id}`)) < --- doesn't work
    // remove(ref(db, 'users/' + noSpecialCharacters).child(id)) < --- doesn't work
     const db = getDatabase();
     remove(ref(db, 'users/' + noSpecialCharacters +  "/" + id)) // <-- this works (finally starting to get an idea of how to access documents in firebase)!!!
     Alert.alert("List was deleted successfully")
    }


    return (
        <View style={styles.itemListStyles} >
            <View style={{ flex: 1 }}>
                <Text onPress={() => navigation.navigate("User list Data", {listName: props.listNames, snap: props.snap})} style={styles.textFontColor}>{props.listNames}</Text>
            </View>
            <TouchableOpacity onPress={deleteHandler}>
            <RemoveList />
            </TouchableOpacity>
            <TouchableOpacity>
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