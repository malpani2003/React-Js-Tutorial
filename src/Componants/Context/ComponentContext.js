import React from "react";

const CopmentContext=React.createContext("Code Arena")

const UserProvider=CopmentContext.Provider
const UserConsumer=CopmentContext.Consumer

export {UserProvider,UserConsumer}
export default CopmentContext