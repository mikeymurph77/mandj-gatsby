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

const FAQContainer = styled.div`
  display: grid;
  margin: 0 15px;
`

const FAQSection = styled.div`
  padding-top: ${rhythm(1)};

  @media screen and (min-width: 601px) {
    grid-column: 1;
  }

  @media screen and (max-width: 601px) {
    h3 {
      font-size: 1.1rem;
    }
  }
`

// const MapSection = styled.div`
//   text-align: center;

//   @media screen and (min-width: 601px) {
//     text-align: right;
//     grid-column: 2;
//   }
// `

const AddressSection = styled.div`
  margin-bottom: ${rhythm(3 / 4)};
`

// const GoogleMapIFrame = styled.iframe`
//   @media screen and (min-width: 601px) {
//     width: 640px;
//   }
// `;

export default function Details({ showDirectionsLink }) {
  return (
    <div>
      <SectionTitle title="Details" />

      <DetailsContainer>
        <DetailSection>
          <h4>Ceremony</h4>
          <AddressSection>
            <div>St. Anthony's of Padua</div>
            <div>250 Revere St, Revere, MA 02151</div>
            <p>Please arrive before 2:30pm</p>
            <a
              href="https://www.google.com/maps/dir//st+anthony's+of+padua+revere+ma/@42.3825689,-71.1371168,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89e36e00093a3a19:0xd391645fb3c0e3c7!2m2!1d-71.001325!2d42.4183444"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </AddressSection>

          <br></br>

          <h4>
            Reception ( <em>Ages 13+</em> )
          </h4>
          <AddressSection>
            <div>Danversport</div>
            <div>161 Elliott St, Danvers, MA 01923</div>
            <p>Cocktail Hour will begin at 5:30pm</p>
            <a
              href="https://www.google.com/maps/dir//danversport+yacht+club/@42.4515172,-71.3721542,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89e31156e4010caf:0x395600e845471fed!2m2!1d-70.9171718!2d42.5579733"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </AddressSection>

          <br></br>

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
      </DetailsContainer>

      <SectionTitle title="FAQ" />
      <FAQContainer>
        <FAQSection>
          <h3>What is the dress code?</h3>
          <p>The dress code for our wedding is formal attire. Ladies should wear formal dresses and gentlemen should wear a suit and tie or a sports jacket. Please no jeans or casual footwear.</p>

          <br></br>

          <h3>Do you have a hotel block for guests? Where do you recommend I stay?</h3>
          <p>We have a limited amount of rooms blocked off at the Boston Marriott Peabody. If you're calling to book a room, mention the "Marlowe-Murphy" wedding block for a discounted rate. If you plan to book online, please use <a href="https://www.marriott.com/events/start.mi?id=1599574980260&key=GRP">this link</a>. Feel free to stay at any other hotel or Airbnb in the area.</p>

          <br></br>

          <h3>Is transportation provided?</h3>
          <p>Transportation to and from the church is not provided. A bus will be shuttling hotel guests from the hotel to Danversport. There will be two pick up times; 4:45pm and 5:15pm at the front of the hotel. Return trips will be provided back to the hotel following the reception at 10:40pm and 11:00pm.
          <br></br>
          If you are planning on driving from the reception hall, please be responsible and have a safe driver, and please use your best judgment.</p>

          <br></br>

          <h3>What time should I arrive?</h3>
          <p>We recommend that you arrive before 2:30pm at St. Anthony's of Padua. That way, we can make sure everyone is on time, and we can get the party started as scheduled! Please note that traffic in this area can be heavy, so please plan your commute with a delay in mind.</p>

          <br></br>

          <h3>Where should guests park? Is parking free?</h3>
          <p>There is free parking at the Church, Hotel, and Reception Hall. Once again, if you are driving to and from the reception hall, please be responsible and have a safe driver, and please use your best judgment.</p>

          <br></br>

          <h3>What happens after the ceremony?</h3>
          <p>After the ceremony, the wedding party will be taking pictures nearby for about an hour. The reception at Danversport will be starting at 5:30pm.
          <br></br>
          Hotel guests are invited to the hotel to pick up a shuttle which will transport guests to the reception hall.
          <br></br>
          Guests not staying at the hotel may head straight to the reception hall.</p>
        </FAQSection>
      </FAQContainer>
    </div>
  )
}
