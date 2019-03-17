import React, { Component, Fragment } from 'react';

class Button extends Component {
   render() {
      let { text, color, url, Click } = this.props;
      return (
         <Fragment>
            <div className={`ui ${color} button`} href={url} onClick={Click}>{text}</div>
         </Fragment >
      )
   }
}

export default Button