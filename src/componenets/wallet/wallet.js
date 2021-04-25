import React, { useContext } from 'react'
import { WithdrawContext } from '../../context/WithdrawContext'
import ActionContainer from './ActionContainer'
import ContainerHeader from './ContainerHeader'
import TransactionDetails from './TransactionDetails'

export default function Wallet() {
    const {transactions} = useContext(WithdrawContext)
    return (
        <div>
            <div className="border-header-end"></div>
            <div className="container-wrapper">

                {/* action head ercomponent starts */}
                <ContainerHeader />

                <div className="app-container">

                    {/* action container component starts */}
                    <ActionContainer />

                    <div className="main-content">
                        <div className="content-heading">
                            <h4>Recent activity</h4>
                        </div>
                        <div className="wallet-content">
                            <div className="card border-light">
                                <div className="header mt-3">
                                    <div className="col-md-10 float-left"> 
                                        <div className="row mb-3 ml-3">
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" style={{background: '#54509d', color: '#ffffff'}} className="btn">Recent</button>
                                                <button type="button" className="btn btn-secondary">Pending</button>
                                            </div>
                                        </div>
                                    </div> 
                                    <div className="float-right col-md-2 text-center mt-2">
                                        <p>View all</p>
                                    </div>
                                </div>
                                <table className="table">
                                    <tbody>
                                        {transactions.map(transaction => (
                                            <TransactionDetails key={transaction.id} transaction={transaction} /> // transaction Details component starts 
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
