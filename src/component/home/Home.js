import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";

//content
import Header from './../home/profile/Header';
import NextMeetUp from './../home/NextMeetUp/NextMeetUp';
import Members from './../home/Members/Members';
import PastMeetUp from './../home/PastMeetUp/PastMeetUp';
import AboutMeetUp from './../home/AboutMeetUp/AboutMeetUp';



class Home extends Component {
   render() {
      let { ChangeMenu } = this.props
      let GetWkfContents = [
         {
            nama: Header,
            props1: ChangeMenu
         },
         {
            nama: NextMeetUp,
            props1: ""
         },
         {
            nama: AboutMeetUp,
            props1: ""
         },
         {
            nama: Members,
            props1: ""
         },
         {
            nama: PastMeetUp,
            props1: ""
         }];

      let Content = GetWkfContents.map((Content, K) => (<Content.nama key={K} ChangeMenu={Content.props1} />))

      return (
         <Fragment>
            <Helmet>
               <title>Home</title>
            </Helmet>
            {Content}
         </Fragment >
      );
   }
}

export default Home;
