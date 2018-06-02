import React, { Component } from "react";
import styled from "styled-components";
import Waypoint from "react-waypoint";
import gallery1 from "../../assets/images/gallery/gallery_1.jpg";
import gallery2 from "../../assets/images/gallery/gallery_2.jpg";
import gallery3 from "../../assets/images/gallery/gallery_3.jpg";
import gallery4 from "../../assets/images/gallery/gallery_4.jpg";
import gallery5 from "../../assets/images/gallery/music_1.jpg";
import gallery6 from "../../assets/images/gallery/music_2.jpg";

export default class Gallery extends Component {
  render() {
    const hidden = {
      opacity: "0",
      width: "100%"
    };
    return (
      <GalleryContent>
        <Waypoint
          topOffset="100px"
          onEnter={() => {
            document.getElementById("galleryContent").classList.add("entered");
          }}
        />
        <GalleryImages id="galleryContent">
          <ImgHolder bgImg={gallery2}>
            {" "}
            <img src={gallery2} style={hidden} alt="gallery" />{" "}
          </ImgHolder>
          <ImgHolder bgImg={gallery6}>
            {" "}
            <img src={gallery6} style={hidden} alt="gallery" />{" "}
          </ImgHolder>
          <ImgHolder bgImg={gallery3}>
            {" "}
            <img src={gallery3} style={hidden} alt="gallery" />{" "}
          </ImgHolder>
          <ImgHolder bgImg={gallery4}>
            {" "}
            <img src={gallery4} style={hidden} alt="gallery" />{" "}
          </ImgHolder>
          <ImgHolder bgImg={gallery5}>
            {" "}
            <img src={gallery5} style={hidden} alt="gallery" />{" "}
          </ImgHolder>
        </GalleryImages>
      </GalleryContent>
    );
  }
}

// STYLED COMPONENTS
const GalleryContent = styled.div`
  background-color: #252525;
  width: 100%;
  height: 100%;
`;
const GalleryImages = styled.div`
  display: grid;
  background-color: #252525;
  width: 100%;
  height: 100%;
  @media (min-width: 763px) {
    grid: auto / repeat(5, 1fr);
    height: 180px;
    transform: translateY(180px);
    opacity: 0;
    transition: opacity 1s, transform 1s;
    &.entered {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
const ImgHolder = styled.div`
  display: block;
  width: 100%;
  max-height: 100vh;
  background-image: url(${props => props.bgImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media (min-width: 763px) {
    grid: auto / repeat(6, 1fr);
    height: 180px;
    background-size: cover;
  }
`;
