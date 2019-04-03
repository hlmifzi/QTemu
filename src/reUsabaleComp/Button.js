import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {
   render() {
      let { text, color, url, Click } = this.props;
      return (
         <Fragment>
            <Link className={`ui ${color} button`} to={url} onClick={Click}>{text}</Link>
         </Fragment >
      )
   }
}

export default Button