import React, { Component, Fragment } from 'react';

class Container extends Component {
   render() {
      let { children } = this.props;
      return (
         <Fragment>
            <div className="padding">
               {children}
            </div>
         </Fragment >
      )
   }
}

export default Container