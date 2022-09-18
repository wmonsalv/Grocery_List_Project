import * as React from 'react';
import { Avatar } from 'react-native-paper';
import { mdiFileDocumentRemove } from '@mdi/js';


const RemoveList = () => (
  <Avatar.Icon size={35} icon={"delete"} color="red" backgroundColor="white"/>
);

export default RemoveList