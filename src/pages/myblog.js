import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import MyBlogContent from '../content/myblog/myblogcontent'

class MyBlog extends React.Component {
    render() {
        const siteTitle = "My Blog"
        const siteDescription = "My Personal Blog"

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
                        <MyBlogContent />
                    </section>

                </div>

            </Layout>
        )
    }
}

export default MyBlog