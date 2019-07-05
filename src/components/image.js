import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = props => (
  // <StaticQuery
  //   query={graphql`
  //     query {
  //       placeholderImage: file(relativePath: { eq: "mountain.jpg" }) {
  //         childImageSharp {
  //           fluid(maxWidth: 300) {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   `}
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1200) {
                  src
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    //     render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
    //   />
    // )
    render={data => {
      const image = data.images.edges.find(edge =>
        edge.node.relativePath.includes(props.filename)
      )
      const imageSizes = image.node.childImageSharp.fluid
      if (!image) {
        return null
      }

      return <Img alt={props.alt} fluid={imageSizes} />
    }}
  />
)
export default Image
