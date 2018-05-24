import React, { Component } from 'react'
import styled from 'styled-components'

export default class Footer extends Component{

    render(){

        return(
          <FooterWrapper id="info">
            <FooterLeft>
              <SectionTitle> Contact </SectionTitle>
              <ContactInfo>
                
                <li>Name: Colin McCullough</li>
                <li>Address: 140 Andrew Drive, Pittsburgh PA 15275</li>
                <li>Phone: 412.490.9080</li>
                <li>Email: cmccullough@industrypgh.com</li>
              
              </ContactInfo>
            </FooterLeft>
            <FooterRight>
              <SectionTitle> Venue </SectionTitle>
              <VenueInfo> Industry Public House - North Fayette</VenueInfo>


              <GoogleMap><iframe title="googleMap" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12144.226259666433!2d-80.176892!3d40.451885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x576a79e4095bf3e6!2sIndustry+Public+House+-+North+Fayette!5e0!3m2!1sen!2sus!4v1527176479540"  width="100%" height="450px" /></GoogleMap>
              <ContactInfo> 
              </ContactInfo>

            </FooterRight>
          </FooterWrapper>

        )
    }
}

const FooterWrapper = styled.section`
height: 100%;
width: 100vw;
background-color: #252525;
padding: 2rem;

display: flex;
flex-direction: column;


@media (min-width: 763px){
  flex-direction: row;
}


`
const SectionTitle = styled.div`
font-weight: 400;
display: flex;
font-size: 3rem;
font-family: 'Fruktur', cursive;
padding: 1em 0;
text-shadow: 0 0 42px #FFC176;
color: white;
font-family: 'Concert One', cursive;
text-align: center;
`

const FooterLeft = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
text-align: center;
margin: auto;

@media(min-width: 763px){
    width: 50%;
    float: left;

    }
`
const ContactInfo = styled.ul`
display: flex;
flex-direction: column;
width: 100%;
text-align: left;
color: #568FB0;
font-size: 1.25em;

@media(min-width: 763px){
    width: 50%;
    float: left;

    }

`

const FooterRight = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
min-height: 800px;

text-align: center;
margin: auto;

@media(min-width: 763px){
    width: 50%;
    float: left;
    min-height: 1000px;

    }

`
const GoogleMap = styled.div`
display: flex;
width: 100%;
padding: .5em;
height: 450px;

`

const VenueInfo = styled.div`
color: #568FB0;
font-size: 1.25em;
text-align: left;
padding: 1em 0;
`