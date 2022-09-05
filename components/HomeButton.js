import * as React from 'react';
import { Button } from 'react-native-paper';

//Note to self: PaperComponent is the component used for the add/cancel buttons on the ItemInput component

const HomeButton = (props) => (
  <Button onPress={props.click} textColor="black" buttonColor="white" mode="contained" style={{ width: 200, marginBottom: 80 }}>Create a List</Button>
);

export default HomeButton;