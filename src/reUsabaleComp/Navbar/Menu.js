import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

const Menu = (props) => {
   let { color, listMenu } = props
   let Menu = listMenu.menu.map((v, index) => (
      <Link className="item" key={index} to={v.link} style={color}>
         {v.text}
      </Link>
   ))


   return (
      <Fragment>
         {Menu}
      </Fragment >
   )
}
export default Menu;