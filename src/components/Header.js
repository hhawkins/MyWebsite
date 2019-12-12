import React from 'react'

import Footer from './Footer'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="/"><h1><strong>HAMZA HAWKINS</strong></h1></a>
                    
                    <ul>
                        <li><a href="/mystory" className="header-links">My Story</a></li>
                        <li><a href="https://linktr.ee/ablackgentleman" className="header-links">Useful Links</a></li>
                    </ul>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
