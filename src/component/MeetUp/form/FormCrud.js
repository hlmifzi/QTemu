import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
   CREATE,
   EDIT,
   DELETE
} from '../CrudAction';

class FormCrud extends Component {

   componentDidMount() {
      this.refs.name.focus()
   }

   resetAndFocus = () => {
      this.refs.myForm.reset()
      this.refs.name.focus()
   }

   fSubmit = (e) => {
      e.preventDefault()
      let { index, act, datas } = this.props.StateCrud
      let name = this.refs.name.value
      let address = this.refs.address.value
      if (act === 1) {
         datas[index].name = name
         datas[index].address = address
      } else {
         let data = {
            name, address
         }
         datas.push(data)
      }

      this.props.CREATE(datas)

      this.resetAndFocus()
   }

   fRemove = (i) => {
      let { datas } = this.props.StateCrud
      datas.splice(i, 1)
      this.props.DELETE(datas)

   }

   fEdit = (i) => {
      let data = this.props.StateCrud.datas[i]
      this.refs.name.value = data.name
      this.refs.address.value = data.address
      let payload = {
         act: 1,
         index: i
      }
      this.props.EDIT(payload)

      this.refs.name.focus()
   }

   render() {

      let { datas } = this.props.StateCrud
      let ListJoin = datas.map((data, i) =>
         <li key={i} className="myList">
            {i + 1}. {data.name}, {data.address}
            <button onClick={() => this.fEdit(i)} class="ui button" type="submit">Edit </button>
            <button onClick={() => this.fRemove(i)} class="ui button" type="submit">Remove</button>
         </li>
      )
      return (
         <Fragment>
            <form ref="myForm" class="ui form" >
               <div class="field">
                  <label>First Name</label>
                  <input type="text" ref="name" name="name" placeholder="First Name" />
               </div>
               <div class="field">
                  <label>Address</label>
                  <input type="text" ref="address" name="address" placeholder="Your Address" />
               </div>
               <button onClick={this.fSubmit} class="ui button" type="submit">Submit</button>
            </form>

            Orang Yang Join

            <pre>
               {
                  ListJoin
               }
            </pre>
         </Fragment>
      )
   }
}

const mapStateToProps = state => ({
   StateCrud: state.CrudReducer
})

const mapDispatchToProps = {
   CREATE,
   EDIT,
   DELETE
}

export default connect(mapStateToProps, mapDispatchToProps)(FormCrud)

