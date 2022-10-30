import { useNavigation } from "@react-navigation/native"
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { auth } from "../../firebase"
import { useState, useEffect } from "react"
import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import db from "/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/firebase.js"
import UserLists from "./userLists"


const PersonalizedList = () => {

    //const [listName, setListName] = useState([{name: " "}])

    const navigation = useNavigation()

    const [currentUser, setCurrentUser] = useState("No active user") //shows up at the top of the screen

    const [FirebaseData, setFirebaseData] = useState([])

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Home")
            })
            .catch(error => alert(error.message))
    }

    // auth.currentUser?.email displays user currently logged in. 
    //We use a question mark because that tells javascript that this "User.email" might be undefined (which if we leave as is and it is undefined, it will crash our app). Hence, this tells js, if it's undefined, don't check for the email.
    //this is the firebase v9 branch 

    const auth = getAuth();
    const userEmail = auth.currentUser?.email
    const noSpecialCharacters = userEmail.replace(/[^a-zA-Z0-9 ]/g, '')

    useEffect(() => {
        if (auth.currentUser?.email) {
            setCurrentUser(auth.currentUser?.email)
        }
    }, []);


    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${noSpecialCharacters}`)).then((snapshot) => {
        if (snapshot.exists()) {
            snapshot.forEach(childSnapShot => {
                let keyName = childSnapShot.key //gives me doc id
                //console.log(keyName)
                let data = childSnapShot.val()
                let listName = data.listName //gets me the list name 
                // console.log(listName)
                // let groceryList = data.GroceryList //gets me the list for each doc  
                // //console.log(groceryList.map(item => item.text))  //this simply prints the values, but it shows that we can extract the values
                // const updatedList = groceryList.map(item => item.text) // [works by assigning it to a variable, which means that we can assign it to state]
                // console.log(updatedList)

            });

        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });

    useEffect(() => { //gets me list of objects 

        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${noSpecialCharacters}`)).then((snapshot) => {
            snapshot.forEach(childSnapShot => {
                let data = childSnapShot.val()
                let listName = data.listName
                setFirebaseData(current => [...current, listName])
            })
        })

    }, [])

    console.log(FirebaseData.map(FirebaseData => FirebaseData))  //I'm taking the whole snapshot and assigning it to state. So far, it doesn't seem like I'm encountering any problems.



    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: "#ededed" }}>
            <View style={styles.header}>
                <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>Email: {currentUser}</Text>
            </View>
            <View style={styles.innerContainer}>
                            {FirebaseData.map((FirebaseData) => {
                                return (
                                    <UserLists listNames={FirebaseData}/>                         
                                );
                            })}
                        </View>
            {/* <View style={{ flex: 1, marginTop: 100 }}>
                <FlatList style={{ height: "100%" }} numColumns={1} renderItem={({ item }) => (
                    <Pressable styles={styles.pressableContainer}>
                        <View style={styles.innerContainer}>
                            {FirebaseData.map((FirebaseData) => {
                                return (
                                    // <userLists listNames={listName}/>  
                                    <Text>{FirebaseData}</Text>                           
                                );
                            })}
                        </View>
                    </Pressable>
                )
                } />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={handleSignOut} style={styles.button}>
                    <Text style={styles.buttonText}>Sign out</Text>
                </TouchableOpacity>
            </View> */}
        </SafeAreaView>
    )

}

export default PersonalizedList

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
    footer: {
        position: "absolute",
        bottom: 25,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        color: "#fff"
    },
})