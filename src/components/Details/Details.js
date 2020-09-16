import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"
import SectionTitle from "../Helpers/SectionTitle"

const DetailsContainer = styled.div`
  display: grid;
`

const DetailSection = styled.div`
  text-align: center;
  padding-top: ${rhythm(1)};

  @media screen and (min-width: 601px) {
    grid-column: 1;
  }
`

const MapSection = styled.div`
  text-align: center;

  @media screen and (min-width: 601px) {
    text-align: right;
    grid-column: 2;
  }
`

const AddressSection = styled.div`
  margin-bottom: ${rhythm(3 / 4)};
`

const GoogleMapIFrame = styled.iframe`
  @media screen and (min-width: 601px) {
    width: 640px;
  }
`;

export default function Details({ showDirectionsLink }) {
  return (
    <div>
      <SectionTitle title="Details" />

      <DetailsContainer>
        <DetailSection>
          <h4>Ceremony</h4>
          <AddressSection>
            <div>St. Anthony's of Padua</div>
            <div>50 Revere St, Revere, MA 02151</div>
            <a
              href="https://www.google.com/maps/dir//st+anthony's+of+padua+revere+ma/@42.3825689,-71.1371168,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89e36e00093a3a19:0xd391645fb3c0e3c7!2m2!1d-71.001325!2d42.4183444"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </AddressSection>

          <h4>
            Reception ( <em>Ages 13+</em> )
          </h4>
          <AddressSection>
            <div>Danversport</div>
            <div>161 Elliott St, Danvers, MA 01923</div>
            <a
              href="https://www.google.com/maps/dir//danversport+yacht+club/@42.4515172,-71.3721542,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89e31156e4010caf:0x395600e845471fed!2m2!1d-70.9171718!2d42.5579733"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </AddressSection>

          <h4>Hotel</h4>
          <AddressSection>
            <div>Boston Marriott Peabody</div>
            <div>8A Centennial Dr, Peabody, MA 01960</div>
            <a
              href="https://www.google.com/maps/dir//boston+marriott+peabody/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e312f8c834d6ad:0xe20e85292d047c95?sa=X&ved=2ahUKEwjWvtCM_8rpAhUzZDUKHc7iCv0Q9RcwDXoECBAQEg"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </AddressSection>
        </DetailSection>

        <MapSection>
          <GoogleMapIFrame title="Wedding Location Map" src="https://www.google.com/maps/d/embed?mid=1FvJ4EHehtHAa3C3Ls2gXRMMmLrftgE7H&hl=en" height="480"></GoogleMapIFrame>
        </MapSection>
      </DetailsContainer>
    </div>
  )
}
