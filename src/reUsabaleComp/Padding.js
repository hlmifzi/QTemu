import React, { Component, Fragment } from 'react';

class Padding extends Component {
   render() {
      let { children, grid } = this.props;
      return (
         <Fragment>
            <div className={`padding ${grid}`}>
               {children}
            </div>
         </Fragment >
      )
   }
}

export default Padding