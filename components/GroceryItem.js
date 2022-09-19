import { StyleSheet, View, Text, Pressable } from "react-native"

//The data from the app component is passed down onto the onPress attribute on pressable through props

function GroceryItem(props) {
    return (

        <View style={styles.itemListStyles} >
            <View style={{ flex: 1 }}>
                <Text style={{
                    textDecorationLine: props.completed ? "line-through" : "none", color: "white",
                    fontWeight: "bold",
                    fontSize: 15,
                }}>{props.text}</Text>
            </View>
        </View>

    )
}

export default GroceryItem

const styles = StyleSheet.create({
    itemListStyles: {
        margin: 8,
        padding: 20,
        borderRadius: 7,
        backgroundColor: "#27963C",
        color: "white",
        flexDirection: "row",
        elevation: 12,
        marginVertical: 10

    },
    pressedItem: {
        opacity: 0.5,
        color: "red"
    },
    textFontColor: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
    }
})