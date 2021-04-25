import React from 'react'
import pay from '../../assets/img/pay.png'
import request from '../../assets/img/request.png'
import topup from '../../assets/img/topup.png'
import withdraw from '../../assets/img/withdraw.png'


const ActionContainer = () => {
    return (
        <div className="action-container">
            <div className="action-heading">
                <h4>Action</h4>
            </div>
            <div className="actions">
                <a href="" className="action-pay action-box">
                    <img src={pay} alt="" srcset=""/>
                    <p>Pay</p>
                </a>
                <a href="" className="action-request action-box">
                    <img src={request} alt="" srcset=""/>
                    <p>Request</p>
                </a>
                <a href="" className="action-toup action-box">
                    <img src={topup} alt="" srcset=""/>
                    <p>ToUp</p>
                </a>
                <a href="" className="action-withdraw action-box selected">
                    <img src={withdraw} alt="" srcset=""/>
                    <p>Withdraw</p>
                </a>
            </div>
        </div>
    )
}
export default ActionContainer;