import * as React from 'react';
import { Button } from 'react-native-paper';

const PaperComponent = (props) => (
  <Button title={props.title} mode="contained" onPress={props.onPress}/>
);

export default PaperComponent;