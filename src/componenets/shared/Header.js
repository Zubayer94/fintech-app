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
                        <li><a href="#">Wallet</a></li>
                        <li><a href="#"></a>History</li>
                        <li><a href="#"></a>Recipients</li>
                        <li><a href="#">QR Codes</a></li>
                    </ul>
                </nav>
            </header>
            <div className="user-notif-header">
                <ul>
                    <li><a href="#"><img src={bell} alt="notification icon" /></a></li>
                    <li><a href="#"><img src={flag} alt="flag icon" /></a></li>
                    <li><a href="#"><img src={avatar} alt="user avatar" /></a></li>
                </ul>
            </div>
        </div>
    )
}
