import React, { Component, Fragment } from 'react';

class HeadSection extends Component {
   render() {
      let { Judul } = this.props;
      return (
         <Fragment>
            <div className="ui">
               <h1><b>{Judul} </b></h1>
            </div>
         </Fragment >
      )
   }
}

export default HeadSection