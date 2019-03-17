import React, { Component, Fragment } from 'react';
import Padding from './Padding';

class Footer extends Component {
   render() {
      let { textFooter } = this.props;
      return (
         <Fragment>
            <Padding>
               <br />
               <hr />
               <br />
               <p style={{ textAlign: 'center', fontSize: '2 em' }}>{textFooter}</p>
            </Padding>
         </Fragment >
      )
   }
}

export default Footer