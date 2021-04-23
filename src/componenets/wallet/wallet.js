import React from 'react'
import qr from '../../assets/img/QR.png'
import pay from '../../assets/img/pay.png'
import request from '../../assets/img/request.png'
import topup from '../../assets/img/topup.png'
import withdraw from '../../assets/img/withdraw.png'

export default function Wallet() {
    return (
        <div>
            <div className="border-header-end"></div>
            <div className="container-wrapper">
                <div className="container-header">
                    <div className="heading">
                        <h1>Wallet</h1>
                        <h4>Dashboard</h4>
                    </div>
                    <div className="heading-content">
                        <div className="header-content-card">
                            <div className="card-left">
                                <h3>Dollar Balance</h3>
                                <button>Primary</button>
                                <p>Available balance</p>
                                <h2>$2680.00</h2>
                            </div>
                            <div className="card-right-qr">
                                <img src={qr} alt="qr code" />
                            </div>
                        </div>
                        <div className="header-content-card">
                            <div className="card-left">
                                <h3>My Dollar</h3>
                                <p>Available balance</p>
                                <h2>$4566.00</h2>
                            </div>
                            <div className="card-right-qr">
                                <img src={qr} alt="qr code" />
                            </div>
                        </div>
                        <div className="header-add-balance-card">
                            <h5>Add balance</h5>
                        </div>
                    </div>
                </div>
                <div className="container">
                <div className="action-container">
                    <div className="action-heading">
                        <h5>Action</h5>
                    </div>
                    <div className="actions">
                        <div className="action-pay">
                            <img src={pay} alt="" srcset=""/>
                            <p>Pay</p>
                        </div>
                        <div className="action-request">
                            <img src={request} alt="" srcset=""/>
                            <p>Request</p>
                        </div>
                        <div className="action-toup">
                            <img src={topup} alt="" srcset=""/>
                            <p>ToUp</p>
                        </div>
                        <div className="action-withdraw">
                            <img src={withdraw} alt="" srcset=""/>
                            <p>Withdraw</p>
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    <div className="content-heading">
                        <h3>Recent activity</h3>
                    </div>

                </div>
            </div>
            </div>
        </div>
    )
}
