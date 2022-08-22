import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.inputContainer}>
        <TextInput style = {styles.textInput} placeholder = "Add Item to the list"/>
        <Button title="Add Item"/>
      </View>
      <View>
        <Text>Grocery List</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput:{
    borderWidth : 1,
    borderColor: '#cccccc',
    width : "80%",
  },
});
