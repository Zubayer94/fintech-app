import React from 'react'
import avatar from '../../assets/img/user_avatar.png';
import bell from '../../assets/img/bell.png';
import flag from '../../assets/img/flag.png';

export default function Header() {
    return (
        <div className="nav-container">
            <header>
                <a href="#" className="logo">Fintech App</a>
                <nav>
                    <ul>
                        <li><a className="selected" href="#">Wallet</a></li>
                        <li><a href="#">History</a></li>
                        <li><a href="#">Recipients</a></li>
                        <li><a href="#">QR Codes</a></li>
                    </ul>
                </nav>
                <div className="user-notif-header">
                    <ul>
                        <li><a href="#"><img src={bell} style={{height: '20px', width: '20px'}} alt="notification icon" /></a></li>
                        <li><a href="#"><img src={flag} style={{height: '15px', width: '20px'}} alt="flag icon" /></a></li>
                        <li><a href="#"><img src={avatar} style={{height: '25px', width: '25px'}} alt="user avatar" /></a></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}
