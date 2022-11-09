import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useState, useEffect } from "react"
import GroceryItem from "../App/GroceryItem"
import Check from "../Icons/Check"
import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import db from "/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/firebase.js"
import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore'
import UserGroceryItem from "/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/components/User_list/UserGroceryItem.js"

//I'm using route.params.listName to circumvent passing data to a navigation function 
//I'm still not understanding the syntax entirely, but I'm able to transfer the data just fine

//what actually shows up when I click on the user list title on the list of list names page. This renders all food items on the list.

const UserListData = ({ route }) => {


    //console.log(route.params.snap)

    const [fireBaseSnap, setfireBaseSnap] = useState([])

    const auth = getAuth();

    const userEmail = auth.currentUser?.email

    const noSpecialCharacters = userEmail.replace(/[^a-zA-Z0-9 ]/g, '')

    useEffect(() => { //I'm doing it for each, because it acts up when I do two state changes at once during a set state operation. This one is supposed to print out grocery items on each list.

        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${noSpecialCharacters}`)).then((snapshot) => {
            snapshot.forEach(childSnapShot => {
                let data = childSnapShot.val()
                let keyName = childSnapShot.key
                let groceryList = data.GroceryList
                let listName = data.listName
                setfireBaseSnap((prevListOfItems) => [...prevListOfItems, { name: listName, list: groceryList, key: keyName }])
                
            })
        })

    }, [])

    let currentList = route.params.listName

    //console.log(fireBaseSnap)

    let filteredList = fireBaseSnap.filter((item) => item.name === currentList) //filters the list so that only items from the current list name are returned 

    let objectArray = filteredList.map(item => item.list) // Assigns the lists to an array of objects of sorts

    // let arrayOfItemsText = filteredList.map(item => item.list.map(item => item.text)) // Gives me an array of arrays containing the text attribute of each object 

    // let flatArrayText = [].concat(...arrayOfItemsText); //this flattens the list into an array of all of the names of the food items on the list for accessibility

    let flatArrayobject = [].concat(...objectArray); // This just flattens the list so that I have an array of objects that I can traverse around 

    //console.log(flatArrayobject) // This just flattens the list so that I have an array of objects that I can traverse around, this is just testing to see how it looks

    

    //console.log(flatArrayText)

    //quick test code, item.list gives me list items, item.name gives me list names, but how do I get singular atributes from the list itself?



    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: "#ededed" }}>
            <View style={styles.header}>
                <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>List Name: {route.params.listName} </Text>
            </View>
            <View >
                {flatArrayobject.map((item) => {
                    return (
                        <TouchableOpacity>
                            <UserGroceryItem completed={item.completed} text={item.text}/>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </SafeAreaView>


    )
}





export default UserListData


const styles = StyleSheet.create({
    header: {
        backgroundColor: "#E0E0E0",
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        bottom: 60
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#27963C",
        width: "60%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 40
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16
    },
    pressableContainer: {
        backgroundColor: "#e5e5e5",
        padding: 15,
        margin: 5,
        borderRadius: 15,
        marginHorizontal: 10
    },
    innerContainer: {
        alignItems: "center",
        flexDirection: "column"
    },
    listContainer: {
        flex: 5,
    },
    itemListStyles: {
        margin: 4,
        padding: 10,
        borderRadius: 7,
        backgroundColor: "#27963C",
        color: "white",
        flexDirection: "row",
        elevation: 12,
        marginVertical: 10,
        textAlign: "center"

    },
})