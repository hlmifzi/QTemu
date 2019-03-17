import React, { Fragment } from 'react';

const ContentNextMeetUp = (props) => {
   let { isiMeetup, judul, tanggal } = props;
   return (
      <Fragment>
         <div className="ui block header card " style={{ width: '100%' }}>
            <div className="content">
               <p className="header">{judul}</p>
               <div className="meta">
                  <span className="date">{tanggal}</span>
               </div>

               <div className="description">
                  {isiMeetup}
               </div>
            </div>
         </div>
      </Fragment >
   )
}
export default ContentNextMeetUp;