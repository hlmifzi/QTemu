export const CREATE = (payload) => ({
   type: "CREATE",
   datas: payload

})

export const EDIT = (payload) => ({
   type: "EDIT",
   payload
})

export const DELETE = (payload) => ({
   type: "DELETE",
   payload
})