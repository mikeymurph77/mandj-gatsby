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
            <div>50 Revere St, Revere, MA 02151</div>
            <p>Please arrive before 3pm</p>
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
          <p>The dress code for our wedding is semi-formal/cocktail attire. Ladies should wear cocktail dresses, and gentlemen should wear a suit and tie or a sports coat.</p>

          <br></br>

          <h3>Is transportation provided?</h3>
          <p>There will be a bus shuttling hotel guests from the hotel to Danversport. Return trips will be provided back to the hotel following the reception. There will be no transportation to and from the church. If you are planning on driving from the reception hall, please be responsible and have a safe driver, and please use your best judgment.</p>

          <br></br>

          <h3>Do you have a hotel block for guests? Where do you recommend I stay?</h3>
          <p>We have a limited amount of rooms blocked off at the Boston Marriott Peabody. If you're calling to book a room, mention the "Marlowe-Murphy" wedding block for a discounted rate. If you plan to book online, please use <a href="https://www.marriott.com/events/start.mi?id=1599574980260&key=GRP">this link</a>. Feel free to stay at any other hotel or Airbnb in the area.</p>

          <br></br>

          <h3>What happens after the ceremony?</h3>
          <p>After the ceremony, the wedding party will be taking pictures nearby for around an hour. Hotel guests can head to the hotel to pick up a shuttle to the reception hall. Guests may also head straight to the reception hall, where we will be serving finger foods and beverages starting at 5:30 pm.</p>

          <br></br>

          <h3>What time should I arrive?</h3>
          <p>We recommend that you arrive before 2:30pm. That way, we can make sure everyone is on time, and we can get the party started as scheduled! Please note that traffic in this area can be heavy, so please plan your commute with a delay in mind.</p>

          <br></br>

          <h3>Where should guests park? Is parking free?</h3>
          <p>There is free parking at the Church, Hotel, and Reception Hall. Once again, if you are driving to and from the reception hall, please be responsible and have a safe driver, and please use your best judgment.</p>
        </FAQSection>
      </FAQContainer>
    </div>
  )
}
