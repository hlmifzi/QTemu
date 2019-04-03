///ROUTESNYA

//return usual
export const INC = () => {
   return { type: "ADD" }
};

//return ()
export const DEC = (payload) => ({
   type: "DEC",
   payload
});
export const RESET = () => ({
   type: "RESE",
});