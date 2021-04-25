import React, { createContext, useState } from 'react'
import FakeData from './FakeData';


export const WithdrawContext = createContext();

const WithdrawContextProvider = ({children}) => {
    const [transactions, settransaction] = useState(FakeData)
    // const [transactions, dispatch] = useReducer(WithdrawReducer, []) //will use for future crud operation

    return (
        <WithdrawContext.Provider value={{transactions}}>
            {children}
        </WithdrawContext.Provider >
    )
}
export default WithdrawContextProvider;
