import { StyleSheet, View, Text } from "react-native"

function GroceryItem(props) {
    return <View style={styles.itemListStyles} >
        <Text style={styles.textFontColor}>{props.text}</Text>
    </View>
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
      textFontColor: {
        color: "white",
      }
})