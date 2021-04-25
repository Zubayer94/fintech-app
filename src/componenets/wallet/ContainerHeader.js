import React from 'react'
import qr from '../../assets/img/QR.png'

const ContainerHeader = () => {
    return (
        <div className="container-header">
            <div className="container-top">
                <h4 className="p-0 m-0"><b>Wallet</b></h4>
                <h6><b>Dashboard</b></h6>
            </div>
            <div className="heading-content">
                <div className="header-content-card">
                    <div className="card-left">
                        <h5><b>Dollar Balance</b></h5>
                        <p className="primary-badge mb-4">Primary</p>
                        <div className="available-balance">
                            <p className="m-0">Available balance</p>
                            <h4>$2680.00</h4>
                        </div>
                    </div>
                    <div className="card-right-qr">
                        <img src={qr} alt="qr code" />
                    </div>
                </div>
                <div className="header-content-card">
                    <div className="card-left">
                        <h5><b>Dollar Balance</b></h5>
                        <p className="mb-4">{ }</p>
                        <div className="available-balance">
                            <p className="m-0">Available balance</p>
                            <h4>$2680.00</h4>
                        </div>
                    </div>
                    <div className="card-right-qr">
                        <img src={qr} alt="qr code" />
                    </div>
                </div>
                <div className="header-add-balance-card">
                    <a href=""><h5>Add balance</h5></a>
                </div>
            </div>
        </div>
    )
}
export default ContainerHeader;