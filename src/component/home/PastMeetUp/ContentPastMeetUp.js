import React, { Fragment, Component } from 'react';

class ContentPastMeetUp extends Component {
   render() {
      const PastMeetUpForeach = (props) => {
         let { PastMeetUpDate, PastMeetUpDesc, PastMeetUpMany } = props
         return (
            <div className="column">
               <div className="ui card block header" style={{ width: '100%' }}>
                  <div className="content">
                     <div className="header">{PastMeetUpDate}</div>
                  </div>
                  <div className="content">
                     <h4 className="ui sub header">{PastMeetUpDesc}</h4>
                     <div className="ui small feed">
                        <div className="event">
                           <div className="content">
                              <div className="summary">
                                 <b>{PastMeetUpMany}</b> Went
                                    </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="extra content" >
                     <button className="ui green button">View</button>
                  </div>
               </div>
            </div>

         )
      }
      const { PastMeetUp } = this.props
      let ContentPastMeetUp = PastMeetUp.map((v, k) => (
         <PastMeetUpForeach
            key={k}
            PastMeetUpDate={v.PastMeetUpDate}
            PastMeetUpDesc={v.PastMeetUpDesc}
            PastMeetUpMany={v.PastMeetUpMany}
         />
      ))

      return (
         <Fragment >
            <div className="ui three column doubling grid" >
               {ContentPastMeetUp}
            </div>
         </Fragment >
      )
   }
}
export default ContentPastMeetUp;