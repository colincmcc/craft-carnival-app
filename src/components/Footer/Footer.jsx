import React, { Component } from 'react'
import styled from 'styled-components'

export default class Footer extends Component{

    render(){

        return(
          <FooterWrapper id="info">
            <FooterLeft>
              <SectionTitle> Contact </SectionTitle>
              <ContactInfo>
                <ul>
                  <li>Name: Colin McCullough</li>
                  <li>Address: 140 Andrew Drive, Pittsburgh PA 15275</li>
                  <li>Phone: 412.490.9080</li>
                  <li>Email: cmccullough@industrypgh.com</li>
                </ul>
              </ContactInfo>
            </FooterLeft>
            <FooterRight>
              <SectionTitle> Venue </SectionTitle>
            </FooterRight>
          </FooterWrapper>

        )
    }
}

const FooterWrapper = styled.section`
height: 80vh;
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
const ContactInfo = styled.div`
display: flex;
flex-direction: column;
width: 100%;
text-align: left;

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

text-align: center;
margin: auto;

@media(min-width: 763px){
    width: 50%;
    float: left;

    }

`
const Venue = styled.div`

`

const Contact = styled.div`

`