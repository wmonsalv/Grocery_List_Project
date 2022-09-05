import * as React from 'react';
import { Button } from 'react-native-paper';

//Note to self: PaperComponent is the component used for the add/cancel buttons on the ItemInput component

const PaperComponent = (props) => (
  <Button buttonColor="#1e90ff" mode="contained" onPress={props.onPress}>{props.title}</Button>
);

export default PaperComponent;