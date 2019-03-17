import React, { Fragment, Component } from 'react';
import UiBlockHeader from '../../../reUsabaleComp/UiBlockHeader';
import ContentHeader from './ContentHeader';
class Header extends Component {
   constructor() {
      super()
      this.state = {
         imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoFXHJsI-Ef3Iuo8GZ2TS480kLoX3UD17SKcP_D3GMfmobiepxQ',
         Judul: 'Hacktiv8 Meetup',
         Location: 'Jakarta, Indonesia',
         Members: '9 Member',
         Organizer: 'Ady Wiranhata',
      }
   }
   render() {
      let { imgUrl,
         Judul,
         Location,
         Members,
         Organizer } = this.state
      return (
         <Fragment>
            <UiBlockHeader>
               <ContentHeader
                  imgUrl={imgUrl}
                  Judul={Judul}
                  Location={Location}
                  Members={Members}
                  Organizer={Organizer}
                  ChangeMenu={this.props.ChangeMenu} />
            </UiBlockHeader>
         </Fragment >
      )
   }
}

export default Header;