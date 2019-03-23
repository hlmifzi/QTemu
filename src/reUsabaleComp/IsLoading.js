import React, { Fragment } from 'react';

const IsLoading = (props) => {
   let { Judul } = props;
   return (
      <Fragment>
         <div className="ui">
            <div className="ui active dimmer">
               <div className="ui massive text loader">{Judul}</div>
            </div>
         </div>
      </Fragment >
   )
}

export default IsLoading