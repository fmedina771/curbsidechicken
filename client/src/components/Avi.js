import React from 'react';
import Avatar from 'material-ui/Avatar';
// import FileFolder from 'material-ui/svg-icons/file/folder';
// import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
// import Form from './Form'
import aviImage from './images/bondJamesbond.jpg';

// import {
//   blue300,
//   indigo900,
//   orange200,
//   deepOrange300,
//   pink400,
//   purple500,
// } from 'material-ui/styles/colors';

const style = {
  margin: 5,
  justifyContent: 'center'
};

/**
 * Examples of `Avatar` using an image, [Font Icon](/#/components/font-icon), [SVG Icon](/#/components/svg-icon)
 * and "Letter" (string), with and without custom colors at the default size (`40dp`) and an alternate size (`30dp`).
 */
const Avi = () => (
  <List>
    <ListItem
      disabled={true}
      rightAvatar={
        <Avatar
          src={aviImage}
          size={200}
          style={style}
        />
      }
    />
  </List>
);


export default Avi;
