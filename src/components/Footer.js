import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/ABlackGentleman" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://www.instagram.com/ablackgentleman/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="https://www.linkedin.com/in/hamzahawkins/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://github.com/hhawkins" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://medium.com/@hamzahawkins" className="icon fa-medium"><span className="label">Medium</span></a></li>
                        <li><a href="mailto:contact@hamzahawkins.com?subject=Hello There!" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>Developed by me</li> 
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
