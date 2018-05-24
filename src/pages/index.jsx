import React from "react";
import Helmet from "react-helmet";
import styled from 'styled-components'

import Nav from '../components/Nav/Nav'
import Header from '../components/Header/Header'
import Tickets from '../components/Tickets/Tickets'
import VendorList from '../components/Main/VendorList'

import Footer from '../components/Footer/Footer'
import config from "../../data/SiteConfig";
import hypnotize from '../assets/images/hypnotize.png'

export default class Index extends React.Component {
 
  render() {
    return (
      <div>
        <Helmet title={config.siteTitle} />
        <MainGridLayout>
          {/* grid-area: top */}
          <NavWrapper>
            <Nav />
          </NavWrapper>
          {/* grid-area: header */}
          <HeaderWrapper>
            <Header homeEdge={this.props.data.wordpressWpHomepageItems} />
          </HeaderWrapper>
          {/* grid-area: main */}
          <TicketWrapper>
            <Tickets />
          </TicketWrapper>

          <VendorWrapper>
            <VendorList alt="" slug="brews" sectionTitle="Breweries" brews={this.props.data.allWordpressWpBreweries.edges} />
            <VendorList alt="one" slug="bands" sectionTitle="Bands" brews={this.props.data.allWordpressWpBreweries.edges} />
            <VendorList alt="" slug="vendors" sectionTitle="Vendors" brews={this.props.data.allWordpressWpBreweries.edges} />

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
  grid: auto / 12vmin 1fr 12vmin;
  overflow: hidden;
  gap: 0;
  grid-template-areas: 
    "top top top"
    "header header header"
    "ticket ticket ticket"
    "main main main"
    "main main main"
    "footer footer footer";
  width: 100%;
  height: 100%;
  background-image: linear-gradient(180deg, #ebc046, #eb9d37, #e97829, #e44c1c);
  &:after{
    content: "";
    position: absolute;
    width: 100%;
    height: 190vh;
    background-image: url(${hypnotize});
    background-repeat: repeat-x repeat-y;
    z-index: 1;
    opacity: .1;
}
`
const NavWrapper = styled.div`
    grid-area: top;
    overflow: visible;
    position: fixed;
    min-height: 64px;
    max-height: 10vh;
    width: 100%;  
    background-color: #252525;
    z-index: 1000;

`
const HeaderWrapper = styled.section`
    grid-area: header;
    display: grid;
    overflow: visible;
    height: 90vh;
    width: 100%;
    margin: 60px auto 0 auto;
    z-index: 2;
   
`

const TicketWrapper = styled.section`
    grid-area: ticket;
    overflow: hidden;
    height: 100%;
    width: 100%;
    display: grid;
    z-index: 3;
    box-shadow: 5px 0 16px #252525;
    @media(min-width: 763px){
      grid-column: 2;
    }
`
const VendorWrapper = styled.div`
  grid-area: main;
  overflow: hidden; 
  height: 100%;
  width: 100%;
  display: grid;
  
`


  /* eslint no-undef: "off" */
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