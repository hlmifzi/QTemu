///CONTROLLER

import { combineReducers } from 'redux'
import CrudReducer from '../component/MeetUp/CrudReducer';
const initialState = {
   title: "Completely your profile to join ",
   angka: 0
}


const MyReducer = (state = { ...initialState }, action) => {
   switch (action.type) {
      case "ADD":
         return ({
            ...state,
            angka: state.angka += 1
         })
      case "DEC":
         return ({
            ...state,
            angka: state.angka -= action.payload
         })
      case "RESE":
         return ({
            ...state,
            angka: 0
         })
      default:
         return state;
   }
}


export default combineReducers({
   MyReducer,
   CrudReducer
})

// export default MyReducer;