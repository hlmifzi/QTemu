import React, { Fragment } from 'react';

const Menu = (props) => {
   let { color, listMenu } = props
   let Menu = listMenu.menu.map((v, index) => (
      <a target="_blank" rel="noopener noreferrer" className="item" key={index} href={v.link} style={color}>
         {v.text}
      </a>
   ))

   return (
      <Fragment>
         {Menu}
      </Fragment >
   )
}
export default Menu;