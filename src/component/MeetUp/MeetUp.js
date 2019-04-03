import React, { Component, Fragment } from 'react';
import Navbar from '../../reUsabaleComp/Navbar/Navbar';
import FormCrud from './form/FormCrud';
import { connect } from "react-redux";
import { INC, DEC, RESET } from '../../redux/Action'


class MeetUp extends Component {
   constructor(props) {
      super(props)
      this.state = {
         title: "Completely your profile to join ",
         menu: [
            {
               text: 'Meet Up',
               link: '/meetUp',
            },
            {
               text: 'Experience',
               link: 'https://hlmifzi.com',
            },
            {
               text: 'Menu Tambahan',
               link: 'https://hlmifzi.com',
            }
         ]
      }
   }
   render() {
      let style = {
         App: { textAlign: 'center' }
      }

      let { title } = this.state
      let { angka } = this.props.StateReducer.MyReducer
      return (
         <Fragment>
            <Navbar ListMenu={this.state} ChangeMenuBack={this.ChangeMenuBack} />
            ===========================  {angka} ============================= <br />
            <button onClick={() => this.props.INC()} className="ui button" type="submit">Tambah</button>
            <button onClick={() => this.props.DEC(2)} className="ui button" type="submit">Kurang</button>
            <button onClick={() => this.props.RESET()} className="ui button" type="submit">Reset</button>
            <div style={style.App}>
               <h2>{title}</h2>
               <FormCrud />
            </div>
         </Fragment >
      )
   }
}

const mapStateToProps = state => ({
   StateReducer: state
});

const mapDispatchToProps = { INC, DEC, RESET }


let connectRedux = connect(mapStateToProps, mapDispatchToProps)(MeetUp);

export default connectRedux