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
        padding: 20,
        borderRadius: 7,
        backgroundColor: "#27963C",
        color: "white",
        flexDirection:"row",
        elevation:12,
        marginVertical:10

    },
    pressedItem: {
        opacity: 0.5,
        color: "red"
    },
    textFontColor: {
        color: "white",
    }
})