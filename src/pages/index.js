import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

class HomeIndex extends React.Component {
    render() {
        const siteTitle = "Home"
        const siteDescription = "The official website for Hamza Hawkins"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h1>Hi, my name is Hamza. I'm an <strong>entrepreneur</strong>, <strong>coder</strong>, and <strong>fitness enthusiast</strong>.</h1>
                            <p></p>
                        </header>
                        <p>I have developed my website from scratch with Gatsby. The source code is uploaded on my Github.</p>
                        <p>On here is my story and some useful links that can help you in your journey for greatness. Stay connected with me on social media...</p>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex