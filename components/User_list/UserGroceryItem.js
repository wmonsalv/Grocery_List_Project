import { StyleSheet, View, Text, Pressable, TouchableOpacity  } from "react-native"
import Check from "../Icons/Check"
import IconOne from "../Icons/IconOne"

function UserGroceryItem(props){

    const checked = (key) => {
        const updatedItem = listOfItems.map((item) => {
          if (item.key === key) {
            return { ...item, completed: true }
          }
          return item;
        })
        setListofItems(updatedItem)
      }



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

export default UserGroceryItem

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
    iconX :{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",  
        justifyContent: 'space-between',
    },
    iconCheck:{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row", 
        right: 3,
        position: "relative",
        
    }
})