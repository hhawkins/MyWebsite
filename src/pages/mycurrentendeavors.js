import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import CurrentEndeavorsContent from '../content/currentendeavors/currentendeavorscontent'

class MyCurrentEndeavors extends React.Component {
    render() {
        const siteTitle = "My Current Endeavours"
        const siteDescription = "What Am I Currently Working On"

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
                        <CurrentEndeavorsContent />
                    </section>

                </div>

            </Layout>
        )
    }
}

//export default MyCurrentEndeavors