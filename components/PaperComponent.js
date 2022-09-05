import * as React from 'react';
import { Button } from 'react-native-paper';

const PaperComponent = (props) => (
  <Button buttonColor="#1e90ff" mode="contained" onPress={props.onPress}>{props.title}</Button>
);

export default PaperComponent;