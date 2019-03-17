import React, { Fragment, Component } from 'react';
import ContentPastMeetUp from './ContentPastMeetUp';
import Padding from '../../../reUsabaleComp/Padding';
import HeadSectionSeeAll from '../../../reUsabaleComp/HeadSectionSeeAll';


class NextMeetUp extends Component {
   render() {
      const { Judul } = "Past Meet Up"
      const PastMeetUp = [
         { PastMeetUpDate: "27 November 2017", PastMeetUpDesc: "#39 JAKARTAJS APRIL MEETUP WITH KUMPARAN", PastMeetUpMany: "139" },
         { PastMeetUpDate: "27 Oktober 2017", PastMeetUpDesc: "#38 JAKARTAJS APRIL MEETUP WITH KUMPARAN", PastMeetUpMany: "12" },
         { PastMeetUpDate: "27 September 2017", PastMeetUpDesc: "#37 JAKARTAJS APRIL MEETUP WITH KUMPARAN", PastMeetUpMany: "32" },
      ]
      return (
         <Fragment>
            <HeadSectionSeeAll Judul={Judul} />
            <Padding>
               <ContentPastMeetUp PastMeetUp={PastMeetUp} />
            </Padding>
         </Fragment >
      )
   }
}
export default NextMeetUp;