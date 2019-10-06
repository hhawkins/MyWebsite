import React from 'react'

import Footer from './Footer'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="/"><h1><strong>HAMZA HAWKINS</strong></h1></a>
                    
                    <ul>
                        <li><a href="/myblog" className="header-links">(coming soon)My Blog</a></li>
                        <li><a href="/mystory" className="header-links">My Story</a></li>
                        <li><a href="/mybackground" className="header-links">(coming soon)My Background</a></li>
                        <li><a href="/mycurrentendeavors" className="header-links">(coming soon)My Current Endeavors</a></li>
                    </ul>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
