import React, { Component } from 'react'
import styled from 'styled-components'
import Modal from 'react-responsive-modal';

import funkyLines from '../../assets/images/funky-lines_transparent.png'


export default class BandList extends Component{
    constructor(props) {
        super(props)
        this.state = {
            activeModal: null,
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.hideModal = this.hideModal.bind(this); 
    }
    clickHandler(e, index) {

        this.setState({ activeModal: index })
    }

    hideModal() {
        this.setState({ activeModal: null })
    }
     

    buildBrewList() {
        const { brews } = this.props
        const brewList = []
    
        brews.forEach(brew => {
            brewList.push({
            name: brew.node.acf.name,
            webUrl: brew.node.acf.website_url,
            fbUrl: brew.node.acf.facebook_url,
            twitterUrl: brew.node.acf.twitter_url,
            imgUrl: brew.node.acf.logo.source_url,
            id: brew.node.acf.logo.id
          })
        })
        return brewList
      }

      buildBrewModals(){
        const { brews } = this.props
        const modalStateValues = brews.map(a => a.node.acf.wordpress_id)
        const modalStates = []
        modalStateValues.forEach(modalStateValue => {
            modalStates.push({[modalStateValue]: false})
        })
          return modalStates
      }

      
      

    render(){
        const breweryItems = this.buildBrewList()
        const {sectionTitle} = this.props
        const {slug} = this.props
        const {alt} =this.props
        
        return(
          <BandWrapper className={alt} id={slug} >
            <header>
              <SectionTitle className={alt}>{sectionTitle}</SectionTitle>
            </header> 
            <BandGrid  className={alt}>
              {breweryItems.map((brewItem, index)=> (
                <BandContainer>
                    
                  <Modal classNames={{
                      closeButton: 'custom-closeButton',
                      overlay: 'custom-overlay',
                      transitionEnter: 'transition-enter',
                      transitionEnterActive: 'transition-enter-active',
                      transitionExit: 'transition-exit',
                      transitionExitActive: 'transition-exit-active',}} 
                      open={this.state.activeModal === index} 
                      onClose={this.hideModal} center
                      animationDuration={500}>
                    <ModalWrapper>
                      <ModalImg src={brewItem.imgUrl} />
                      <ModalContent></ModalContent>
                      <ModalTitle>{brewItem.name}</ModalTitle>
                      <ModalFooter>
                        <SocialIcon onClick={() => {if(brewItem.twitterUrl != "")window.open(brewItem.twitterUrl)}} className="fa fa-twitter"/>
                        <SocialIcon onClick={() => {if(brewItem.facebookUrl != "")window.open(brewItem.facebookUrl)}} className="fa fa-facebook"/>
                        <SocialIcon onClick={() => {if(brewItem.webUrl != "")window.open(brewItem.webUrl)}} className="fa fa-globe"/>
                      </ModalFooter>
                    </ModalWrapper>
                        
                  </Modal>
                  <BandLink  id={brewItem.id} onClick={e => this.clickHandler(e, index)}>
                    <BandTitle> {brewItem.name} </BandTitle>
                    <BandImg className={alt} src={brewItem.imgUrl} />  
                  </BandLink>
                </BandContainer>
                ))}
                
      
            </BandGrid>
          </BandWrapper>
        )
    }
}

// TODO BandWrapper is a nested mess of CSS.  Tidy up.

const BandWrapper = styled.section`
    display: flex;
    flex-direction: column;
    z-index: 4;
    text-align: center;
    float: left;
    background-color: #196591;
    height: 100%;
    margin: 1em 0;

    
    @media screen and (min-width: 763px) {
        width: 90%;
        height: 80vh;
        &:after{
            content: "";
            background-image: url(${funkyLines});
            opacity: .1;
            position: absolute;
            width: 100%;
            height: 300%;
            z-index: -1;
            left: 0;
            overflow: hidden;
            @media screen and (min-width: 763px) {
                width: 90%;
                height: 80vh;
    
            }
    }
    
    @media screen and (min-width: 763px) {
        padding: 0 10vmin 4rem 10vmin;
        padding-bottom: 3rem;

    }

   
   
`

const BandGrid = styled.div`
    display: grid;
    justify-content: space-evenly;
    align-items:center;
    grid-gap: 5px;
    height: 100%;
    width: 100%;  
    grid-template-columns: repeat(auto-fit, 1fr);
    &.one{

    }
    &.vertical{
        margin-top: 2rem;
    }
    @media(min-width: 763px){
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
`
const SectionTitle = styled.h2`
    font-weight: 400;
    font-size: 3rem;
    font-family: 'Fruktur', cursive;
    text-shadow: 0 0 42px #FFC176;
    color: #252525;
    &.one{
        text-shadow: 0 0 42px #568EB0;


    }
    &.vertical{
        transform: skewY(0);
        writing-mode: vertical-rl;
        text-orientation: upright;
        float: right;
        position: absolute;
        right: 20px;
        padding: 0;
        margin: 0;
    }
    @media(min-width: 763px){
        font-size: 4em;
    }
    @media screen and (min-width: 1280px) {
        font-size: 6rem;

    }
`

const SocialIcon = styled.span`
    padding: 10px;
    
    &:hover{color: #C56543}
`

const BandContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 15px;

    &:hover{outline:2px solid #C56543}
   
`

const BandLink = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    margin-bottom: 2em;
    @media(min-width: 763px){
        font-size: 3em;
    }
`
const BandTitle = styled.div`
font-weight: 400;
font-size: 2rem;
font-family: 'Fruktur', cursive;
padding-top: 1em;
text-shadow: 0 0 42px #FFC176;
color: white;
font-family: 'Concert One', cursive;

`

const BandImg = styled.img`
    display: block;
    max-width: 100%;
    margin: auto;
    height: 30vh;

    &:hover{opacity:.8}

`


// Modal Design
const ModalWrapper = styled.div`
     
    display: grid;
    grid-column-gap: 20px;
    grid-template-areas:
    "title"
    "img"
    "bd"
    "ft";
    color: black;
    z-index: 999;
    @media (min-width: 600px) {
        clear: both;
        &:after{
            content: "";
            display: block;
            clear: both;  
        }
    }
    @supports(display: grid ) {
        display: grid;
        grid-column-gap: 20px;
        grid-template-columns: 150px 3fr;
        grid-template-rows: auto 1fr auto;
        grid-template-areas:
        "img title"
        "img bd"
        "ft bd";   
    }
`
const ModalContent = styled.div`
    display: none;
    @media (min-width: 600px) {
        grid-area: bd;
        padding: 1.2rem;
        display: flex;
        overflow-y: auto;
    }
`
const ModalFooter = styled.div`
    grid-area: ft;    
    font-size: 2em;
    padding: 1.2rem;
    display: flex;
    @media (min-width: 600px) {
            padding: 10px;
        }
`
const ModalTitle = styled.div`
    grid-area: title;
    font-size: 2em;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    font-weight: bold;
    text-align: center;
    font-family: 'Concert One', cursive;

`

const ModalImg = styled.img`
    display:flex;
    grid-area: img;
    width: 100%
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    align-items: end;
    justify-content: end;
    @media (min-width: 600px) {
        margin: 0 10px 0 0;
        width: 150px;

    }
`