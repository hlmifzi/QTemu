import React, { Fragment } from 'react';

const HeadSectionSeeAll = (props) => {
   let { Judul } = props;
   return (
      <Fragment>
         <div className="ui grid">
            <div className="four column row">
               <div className="left floated column">
                  <h1><b>{Judul}</b></h1>
               </div>
               <div className="right floated column" style={{ textAlign: 'right' }}>
                  <a href="https://facebook.com"><b>See All >></b></a>
               </div>
            </div>
         </div>
      </Fragment >
   )
}

export default HeadSectionSeeAll