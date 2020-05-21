import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="home" />
      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div key={node.slug}>
          <Link to={node.slug}>
            <h3>{node.title}</h3>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`