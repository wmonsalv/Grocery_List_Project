import { View, Text, StyleSheet, TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native"
import Share from "../Icons/Share"
import RemoveList from '../Icons/RemoveList';
import firebase from "/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/firebase.js"
import { getDatabase, ref, child, get } from "firebase/database";



function UserLists(props) {




    const navigation = useNavigation()

    const id = props.snap.docId //gives me current doc id

    //console.log(props.snap.docId)


    return (
        <View style={styles.itemListStyles} >
            <View style={{ flex: 1 }}>
                <Text onPress={() => navigation.navigate("User list Data", {listName: props.listNames, snap: props.snap})} style={styles.textFontColor}>{props.listNames}</Text>
            </View>
            <TouchableOpacity>
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