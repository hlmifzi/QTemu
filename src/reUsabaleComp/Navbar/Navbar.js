import React, { Component } from 'react';
import Menu from './Menu';
import { NavbarCSS } from './NavbarStyle';
import Button from '../Button';

class Navbar extends Component {
   render() {
      let { ListMenu } = this.props
      return (
         <div className="ui huge menu" style={NavbarCSS.right}>
            <a href="/" className="active item" style={NavbarCSS.MenuColorLogo}>
               <b>QTemu</b>
            </a>
            <Menu color={NavbarCSS.MenuColor} listMenu={ListMenu} />
            <div className="right menu">
               <div className="item">
                  <Button text="Normal Menu" url="http://hlmifzi.com" color="green" Click={this.props.ChangeMenuBack} />
               </div>
            </div>
         </div>
      )
   }
}

export default Navbar;