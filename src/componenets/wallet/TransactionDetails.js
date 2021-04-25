import React from 'react'
import avatar from '../../assets/img/user.png'

const TransactionDetails = ({transaction}) => {
    const {user, to, email, ammount, status} = transaction;
    return (
        <tr>
            <td style={{width: '12px'}}><img className="avatar" src={avatar} alt="avatar" /></td>
            <td>
                <div className="wrap-table-row ml-3">
                    <div className="row tr-name">
                        {user}
                    </div>
                    <div className="row">
                        <span className="m-0 tr-mail">To: {to} . {email}</span>
                    </div>
                </div>
            </td>
            <td style={{width: '115px'}}>
                <div className="wrap-table-row ml-3">
                    <div className="row tr-amount">
                        + $ {ammount} 
                    </div>
                    <div className="row">
                        <p className="primary-badge m-0">{status}</p>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default TransactionDetails
