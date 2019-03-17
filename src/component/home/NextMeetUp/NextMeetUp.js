import React, { Fragment } from 'react';
import ReactHtmlParser from 'react-html-parser';

//content
import ContentNextMeetUp from './ContentNextMeetUp';
import HeadSection from '../../../reUsabaleComp/HeadSection';
import Padding from '../../../reUsabaleComp/Padding';

const NextMeetUp = (props) => {
   const Judul = "Next Meet Up";
   let isiMeetupHtml = {
      judul: 'Awesome meetup and event',
      tanggal: '25 January 2019',
      isiContent: `Hello, Javascript & Mode.js Ninjas !<br />Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018! <br />
      The Meetup format will contain some short stories and technical Talks.<br />If you have a short announcement youd like to share with the audience, you may do so during open mic announcement.<br /> <br />
      Remember to bring a photo ID to get through building security. <br />
      --------- <br /> <br />See you there!<br/>Best, Hengki, Giovanni, Sofian, Riza, Agung The Jakarta JS Organizers`
   }
   let isiMeetup = ReactHtmlParser(isiMeetupHtml.isiContent);
   return (
      <Fragment>
         <HeadSection Judul={Judul} />
         <Padding>
            <ContentNextMeetUp isiMeetup={isiMeetup} judul={isiMeetupHtml.judul} tanggal={isiMeetupHtml.tanggal} />
         </Padding>
      </Fragment >
   )
}
export default NextMeetUp;