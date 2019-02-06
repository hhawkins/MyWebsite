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
                        <p>I am currently in the process of redeveloping my website from scratch. Check back later for updates!</p>
                        <p>In the meantime, stay connected with me on social media...</p>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex