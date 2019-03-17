import React, { Fragment } from 'react';

const ContentNextMeetUp = ({ aboutMeetUp }) => {
   return (
      <Fragment>
         <div className="ui " style={{ width: '100%' }}>
            <div className="content">
               <div className="description">
                  {aboutMeetUp}
               </div>
            </div>
         </div>
      </Fragment >
   )
}
export default ContentNextMeetUp;