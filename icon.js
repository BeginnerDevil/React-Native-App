import React, { Component } from 'react';
import { Image } from 'react-native';


export default class Icon extends Component {

   render() {
      return <Image
         source={this.props.focused ? this.props.selectedImage : this.props.normalImage}
         style={{ width: 25, height: 25 }} />
   }
}
const styles = {

}