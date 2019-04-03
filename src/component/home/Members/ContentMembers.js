import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

class ContentMembers extends Component {
   render() {
      let { content, orang } = this.props
      return (
         < Fragment >
            <div className="ui block header card" style={{ width: '100%' }}>
               <div className="ui comments">
                  <div className="comment">
                     <a href="/" className="avatar">
                        <img src={content.urlImg} style={{ width: '100%' }} alt="member" />
                     </a>
                     <div className="content">
                        <a href="/" className="author"><b>{content.Jabatan}</b></a><br /><br />
                        {orang[3]} &nbsp;&nbsp;&nbsp;   <a href="https://facebook.com"><b>{content.Sisa}</b></a>
                     </div>
                  </div>
               </div>
            </div>
         </Fragment >
      )
   }
}

ContentMembers.propTypes = {
   content: PropTypes.object.isRequired,
}
export default ContentMembers;