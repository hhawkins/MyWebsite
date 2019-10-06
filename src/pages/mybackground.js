import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import MyBackgroundContent from '../content/mybackground/mybackgroundcontent'

class MyStory extends React.Component {
    render() {
        const siteTitle = "My Background"
        const siteDescription = "My Work Background and Experience"

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
                        </header>
                        <MyBackgroundContent />
                    </section>

                </div>

            </Layout>
        )
    }
}

export default MyStory