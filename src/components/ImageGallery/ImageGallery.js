import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

const ImageGrid = styled.div`
  display: grid;
  grid-gap: 10px;

  grid-template-columns: repeat(auto-fill, 1fr);
  grid-template-rows: repeat(8, auto-fill);
  margin-bottom: ${rhythm(2)}
`;

const ImageItem = styled.div`
  :nth-child(5n) {
    grid-column-end: span 2;
  }

  :last-child {
    grid-column-end: span 2;
  }
`;

const CloudinaryImg = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageGallery = () => {
  const data = useStaticQuery(graphql`query CloudinaryImage {
      allCloudinaryMedia(filter: {public_id: {regex: "/MandJ/engagement-photos/"}}, sort: {fields: public_id}) {
        edges {
          node {
            id
            secure_url
          }
        }
      }
    }`
  )
  const clImages = data.allCloudinaryMedia.edges

  const options = {
    buttons: {
      backgroundColor: '#000',
      showDownloadButton: false,
      iconColor: '#fff'
    },
    settings: {
      overlayColor: '#000',
      transitionSpeed: 1000,
      transitionTimingFunction: 'linear',
      slideAnimationType: 'both'
    },
    thumbnails: {
      thumbnailsSize: ['120px', '150px'],
    },
    progressBar: {
      height: '10px',
    },
    caption: {
      showCaption: false
    }
  }

  return (
    <SimpleReactLightbox>
      <SRLWrapper options={options}>
        <ImageGrid>
          {clImages.map((image, index) => (
            <ImageItem key={`${index}-cl`}>
              <a
                href={image.node.secure_url}
                data-attribute="SRL"
                className="pseudo-element"
              >
                <CloudinaryImg src={image.node.secure_url} alt={`engagement photo ${index}`} />
              </a>
            </ImageItem>
          ))}
        </ImageGrid>
      </SRLWrapper>
    </SimpleReactLightbox>
  )
}

export default ImageGallery

