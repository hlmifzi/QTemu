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
      let { ChangeMenu, orang } = this.props

      let GetWkfContents = [
         {
            nama: Header,
            props1: ChangeMenu,
            orang: orang
         },
         {
            nama: NextMeetUp,
            props1: "",
            orang: orang
         },
         {
            nama: AboutMeetUp,
            props1: "",
            orang: ""
         },
         {
            nama: Members,
            props1: "",
            orang: orang
         },
         {
            nama: PastMeetUp,
            props1: "",
            orang: ""
         }];

      let Content = GetWkfContents.map((Content, K) => (<Content.nama key={K} ChangeMenu={Content.props1} orang={orang} />))

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
