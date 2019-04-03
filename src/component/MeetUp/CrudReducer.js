const initialState = {
   act: 0,
   index: '',
   datas: []
}


const CrudReducer = (state = { ...initialState }, action) => {
   switch (action.type) {
      case "CREATE":
         return ({
            ...state,
            act: 0,
            datas: action.datas
         })
      case "EDIT":
         return ({
            ...state,
            act: action.payload.act,
            index: action.payload.index
         })
      case "DELETE":
         return ({
            ...state,
            datas: action.payload
         })
      default:
         return state
   }
}

export default CrudReducer