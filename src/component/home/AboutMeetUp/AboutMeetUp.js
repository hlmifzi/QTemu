import React, { Fragment } from 'react';
import ReactHtmlParser from 'react-html-parser';

//content
import ContentAboutMeetUp from './ContentAboutMeetUp';
import HeadSection from '../../../reUsabaleComp/HeadSection';
import Padding from '../../../reUsabaleComp/Padding';

const AboutMeetUp = (props) => {
   const Judul = "About Meet Up"
   let aboutMeetUpHtml = `Come and meet otehr developers interested in the javascript and it's library in the Greater Jakarta Area !<br /> <br />
   Twitter : @JakartaJS and we use the hashtag #jakartajs <br />`
   let aboutMeetup = ReactHtmlParser(aboutMeetUpHtml)
   return (
      <Fragment>
         <HeadSection Judul={Judul} />
         <Padding>
            <ContentAboutMeetUp aboutMeetUp={aboutMeetup} />
         </Padding>
      </Fragment >
   )
}
export default AboutMeetUp;