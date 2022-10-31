import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import GroceryItem from "../App/GroceryItem"
import Check from "../Icons/Check"

//I'm using route.params.listName to circumvent passing data to a navigation function 
//I'm still not understanding the syntax entirely, but I'm able to transfer the data just fine

const UserListData = ({ route }) => {


    console.log(route.params.current)

    








    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: "#ededed" }}>
            <View style={styles.header}>
                <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>List Name: {route.params.listName} </Text>
            </View>
            {/* <View >
                {route.params.snap.map((item) => {
                    return (
                        <TouchableOpacity>
                            <Text>{item.text}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View> */}
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
        textAlign:"center"

    },
})