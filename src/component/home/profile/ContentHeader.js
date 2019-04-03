import React, { Fragment } from 'react';
import Button from '../../../reUsabaleComp/Button';
import PropTypes from 'prop-types';

class ContentHeader extends React.Component {
   constructor(props) {
      super(props)
      this.ChangeMenuBack = this.ChangeMenuBack.bind(this);
   }
   cs
   ChangeMenuBack() {
      console.log('woi')
      this.setState({
         menu: [
            {
               text: 'Meet Upa New',
               link: 'https://facebook.com',
            }
         ]
      })
   }


   render() {
      let { imgUrl, Judul, Location, Members, orang } = this.props
      return (
         <Fragment>
            <div className="four wide column">
               <img src={imgUrl} alt="helmi" />
            </div>
            <div className="nine wide column">
               <h1>{Judul}</h1>
               <p>Location    : {Location}</p>
               <p>Members     : {Members}</p>
               <p>Organizer   : {orang[0]}</p>
               <Button text="Sisa 1 menu" url="http://hlmifzi.com" color="yellow" Click={this.props.ChangeMenu} />
               {/* <Button text="Join Us" url="http://hlmifzi.com" color="yellow" Click={this.ChangeMenuBack} /> */}
            </div>
         </Fragment >
      )
   }
}


ContentHeader.propTypes = {
   imgUrl: PropTypes.string,
   Judul: PropTypes.string,
   Location: PropTypes.string,
   Members: PropTypes.string,
   Organizer: PropTypes.string,
}
export default ContentHeader;