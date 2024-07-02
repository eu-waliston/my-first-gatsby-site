//step 1 Import React
import * as React from 'react'
import Layout from '../components/layout'


//step 2 Dewfine your component
const IndexPage = () => {
    return (
        <main>
            <Layout pageTitle={"Home Page"}>
            <p>I'm making this by following the Gatsby Tutorial</p>
            </Layout>
        </main>
    )
}

export const Head = () => <title>Home Page</title> 


// step 3 export yout component
export default IndexPage;