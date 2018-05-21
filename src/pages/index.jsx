import React from "react";
import Helmet from "react-helmet";
import styled from 'styled-components'

import Nav from '../components/Nav/Nav'
import Header from '../components/Header/Header'
import Tickets from '../components/Tickets/Tickets'
import VendorList from '../components/Main/VendorList'

import Footer from '../components/Footer/Footer'
import config from "../../data/SiteConfig";
import bg_gradient from '../assets/images/background_gradient-01.png'
import sunburst from '../assets/images/cc-sunburst-solo-2.png'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={config.siteTitle} />
        <MainGridLayout>
          {/* grid-area: top */}
          <Nav />

          {/* grid-area: header */}
          <Header homeEdge={this.props.data.wordpressWpHomepageItems} />

          {/* grid-area: main */}
          <ContentBackground />
          <Tickets />

          <VendorWrapper>
            <VendorList alt="" slug="breweries" sectionTitle="Breweries" brews={this.props.data.allWordpressWpBreweries.edges} />
            <VendorList alt="" slug="bands" sectionTitle="Bands" brews={this.props.data.allWordpressWpBreweries.edges} />
          </VendorWrapper>

          {/* grid-area: footer */}
          <Footer />

        </MainGridLayout>

      </div>
    );
  }
}


// STYLED COMPONENTS


const MainGridLayout = styled.div`
  display: grid;
  grid: auto / 1fr minmax(30vmin, 50vmin) minmax(30vmin, 50vmin) 1fr;
  overflow: hidden;
  gap: 0;
  grid-template-areas: 
    "top top top top"
    "header header header header"
    "header header header header"
    "main main main main"
    "main main main main"
    "main main main main"
    "footer footer footer footer";

  
  width: 100vw;
  height: 100%;
  background-image: linear-gradient(180deg, #ebc046, #eb9d37, #e97829, #e44c1c);

`
const ContentBackground = styled.div`
  grid-row: 3/7;
  grid-column: 2/4;
  background-color: white;
  width: 100%;
  height: 100%;
`
const VendorWrapper = styled.div`
  overflow: hidden; 
  height: 100%;
  grid-area: main;
  grid-row: 5/6;
  display: grid;
  
  @media screen and (min-width: 990px) {
  }
`


  /* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allWordpressPage(sort:{fields:[menu_order]}){
    edges{
      node{
        slug
        template
        menu_order
      }
    }
  }
    wordpressWpApiMenusMenusItems(slug: {eq:"eventbrite-main-menu"}){
     items {
          wordpress_id
          order
          title
          url
          attr
          target
          object_slug
          type
          type_label
        }
  }
  wordpressWpHomepageItems(slug: {eq:"home"}){
    id
    slug
		acf{
      bgimg {
        wordpress_id
        title
        caption
        mime_type
        source_url
      }
      header_logo {
        wordpress_id
        alt
        title
        caption
        description
        mime_type
        url
        width
        height
      }
      trailing_image
      header_text
    }
  }
  allWordpressAcfBands{
    edges{
      node{
        acf{
          band_name
          band_image {
            wordpress_id
            alt
            title
            caption
            description
            mime_type
            url
            width
            height
          }
          facebook_url
          twitter_url
          website_url
        }
      }
    }
  }
  allWordpressWpRetails{
    edges{
      node{
        acf{
          name
          logo {
            url
            wordpress_id
            description
          }
          website_url
          facebook_url
          twitter_url
          pinterest_url
          instagram_url
        }
      }
    }
  }
  allWordpressWpBreweries{
    edges{
      node{
        acf{
          name
          logo {
           url
          wordpress_id
          }
          website_url
          facebook_url
          twitter_url
          pinterest_url
          instagram_url
        }
      }
    }
  }
  }
`