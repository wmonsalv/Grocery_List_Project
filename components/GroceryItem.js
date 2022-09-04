import { StyleSheet, View, Text, Pressable } from "react-native"

//The data from the app component is passed down onto the onPress attribute on pressable through props

function GroceryItem(props) {
    return (

        <View style={styles.itemListStyles} >
            <Pressable
                android_ripple={{color: "#4682B4"}}
                onPress={props.onDelete.bind(this, props.text)}
                style = {({pressed}) => pressed && styles.pressedItem}
                >
                <Text style={styles.textFontColor}>{props.text}</Text>
            </Pressable>
        </View>

    )
}

export default GroceryItem

const styles = StyleSheet.create({
    itemListStyles: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#1e90ff",
        color: "white",
    },
    pressedItem: {
        opacity: 0.5,
        color: "red"
    },
    textFontColor: {
        color: "white",
    }
})