import React from 'react'

import Footer from './Footer'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="https://www.hamzahawkins.com"><h1><strong>HAMZA HAWKINS</strong></h1></a>
                    
                    <ul>
                        <li><a href="#" className="header-links">(coming soon)My Story</a></li>
                        <li><a href="#" className="header-links">(coming soon)My Background</a></li>
                        <li><a href="#" className="header-links">(coming soon)My Current Endeavors</a></li>
                    </ul>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
