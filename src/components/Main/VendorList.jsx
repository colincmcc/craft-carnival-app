import React, { Component } from 'react'
import styled from 'styled-components'
import Modal from 'react-responsive-modal';

export default class VendorList extends Component{
    constructor(props) {
        super(props)
        this.state = {
            open: false,
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
            imgUrl: brew.node.acf.logo.url,
            id: brew.node.acf.logo.wordpress_id
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
        const { open } = this.state
        const {sectionTitle} = this.props
        const {slug} = this.props
        const {alt} =this.props
        
        return(
           <BreweryWrapper className={alt} id={slug} >
                <header>
                <SectionTitle className={alt}>{sectionTitle}</SectionTitle>
                </header> 
                <BreweryGrid  className={alt}>
                    {breweryItems.map((brewItem, index)=> (
                        <BreweryContainer>
                        
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
                            <BreweryLink  id={brewItem.id} onClick={e => this.clickHandler(e, index)}>
                                        <BreweryImg className={alt} src={brewItem.imgUrl} />  
                            </BreweryLink>
                        </BreweryContainer>
                    ))}
                    
        
                </BreweryGrid>
            </BreweryWrapper>
        )
    }
}
const BreweryWrapper = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    &.one{
        float: left;
        background-color: #196591;
        height: 100vh;
        @media screen and (min-width: 763px) {
            width: 90%;
            height: 80vh;

         }
    }
    @media screen and (min-width: 763px) {
        padding: 0 10vmin;

    }
   
`

const BreweryGrid = styled.div`
    display: grid;
    justify-content: space-evenly;
    padding: 1em 2em;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 5px;
    height: 100%;
    width: 100%;  
    &.one{
        grid-auto-rows: minmax(10vh, auto);
        grid-template-columns: repeat(auto-fit, 1fr);
    }
    &.vertical{
        margin-top: 2rem;
    }
`
const SectionTitle = styled.h2`
    font-weight: 400;
    font-size: 4rem;
    font-family: 'Fruktur', cursive;
    float: left;
    padding-top: 1em;
    padding-left: 1em;
    text-shadow: 0 0 42px #FFC176;
    transform: skewY(-11.5deg);
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
    @media(max-width: 763px){
        font-size: 3em;
    }
`

const SocialIcon = styled.span`
    padding: 10px;
    
    &:hover{color: #C56543}
`

const BreweryContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    &:hover{outline:2px solid #C56543}
`
const BreweryLink = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    
    @media(min-width: 763px){
        font-size: 3em;
    }
`

const BreweryImg = styled.img`
    display: block;
    max-width: 100%;
    margin: auto;
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