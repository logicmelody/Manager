// Import libraries for making a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Create a component
class Header extends Component {

  render() {
    return (
        <View style={this.styles.viewStyle}>
          <Text style={this.styles.textStyle}>{this.props.headerText}</Text>
        </View>
    );
  }
}

// const Header = (props) => (
//   <View style={this.styles.viewStyle}>
//     <Text style={this.styles.textStyle}>{props.headerText}</Text>
//   </View>
// );

Header.prototype.styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },

  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the app
export { Header };
