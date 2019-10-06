import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import About from '../content/about/about'

class MyStory extends React.Component {
    render() {
        const siteTitle = "My Story"
        const siteDescription = "The Story of Hamza Hawkins"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">
                <h1 class="align-center">{siteTitle}</h1>
                    <section id="one">
                        <header className="major">
                            <h1>Hi, my name is Hamza. I'm an <strong>entrepreneur</strong>, <strong>programmer</strong>, <strong>graphic designer</strong>, and <strong>fitness enthusiast</strong>.
                            This is my story.</h1>
                            <p></p>
                        </header>
                        <About />
                    </section>

                </div>

            </Layout>
        )
    }
}

export default MyStory