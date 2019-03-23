import React, { Fragment, Component } from 'react';
import ContentMembers from './ContentMembers';

import HeadSectionSeeAll from '../../../reUsabaleComp/HeadSectionSeeAll';

class Members extends Component {
   constructor() {
      super()
      this.state = {
         urlImg: "https://randomuser.me/api/portraits/men/75.jpg",
         Jabatan: "Organizers",
         Nama: "Adhy Wiranata",
         Sisa: "4 Others",

      }
   }

   render() {
      let Judul = "Members"
      let orang = []
      this.props.orang.forEach(function(element) {
         orang.push(element.name)
     });
      return (
         <Fragment>
            <HeadSectionSeeAll Judul={Judul} />
            <div className="padding grid">
               <ContentMembers content={this.state} orang={orang}/>
            </div>
         </Fragment >
      )
   }
}
export default Members;