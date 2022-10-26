import { View, Text, StyleSheet} from "react-native"


function userLists(props) {

    return (
        <View style={styles.itemListStyles} >
            <View style={{ flex: 1 }}>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 15,
                }}>{props.lists}</Text>
            </View>
        </View>
    )
}



export default userLists

const styles = StyleSheet.create({
    itemListStyles: {
        margin: 4,
        padding: 5,
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
        fontSize: 20,
    },
})