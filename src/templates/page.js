import React, { Fragment } from 'react'

const Page = props => {
  const { data } = props
  const { transition } = props
  const { markdownRemark: post } = data
  const style = post.frontmatter.style || ''

  return (
    <div style={transition && transition.style} className={style + ' page'}>
      {style === 'index' && (
        <div className="index-me-wrapper">
          <img className="index-me" src="/assets/me.jpg" />
        </div>
      )}
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export default Page

export const PageQuery = graphql`
  query Page($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        style
      }
    }
  }
`