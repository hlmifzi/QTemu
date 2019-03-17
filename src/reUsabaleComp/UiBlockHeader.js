import React, { Component, Fragment } from 'react';

class UiBlockHeader extends Component {
   render() {
      let { children } = this.props;
      return (
         <Fragment>
            <div className="ui block header">
               <div className="ui grid">
                  {children}
               </div>
            </div>
         </Fragment >
      )
   }
}

export default UiBlockHeader