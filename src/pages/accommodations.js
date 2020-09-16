import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { isMobile } from "react-device-detect";
import { navigate } from '@reach/router';

import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import SectionTitle from "../components/Helpers/SectionTitle"

const LinkRow = styled.div`
  display: flex;
  justify-content: center;
  margin: ${rhythm(1)} ${rhythm(1)} ${rhythm(1)};
`

const NavLink = styled.p`
  margin: ${rhythm(1)} ${rhythm(2)} 0;
  text-decoration: none;
  cursor: pointer;
  color: #3c6492;
`

const AccommodationsContent = styled.div`
  margin-right: 15px;
  margin-left: 15px;
`;

const AttractionTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${rhythm(2)};
`

const onNavClickHandler = (anchor) => {
  navigate(anchor);
}

export default function Accommodations() {
  return (
    <Layout>
      <Header />
      <SectionTitle title="Accommodations" />

      {!isMobile && (
        <LinkRow>
          <NavLink onClick={() => onNavClickHandler('#travel')}>Travel</NavLink>
          <NavLink onClick={() => onNavClickHandler('#hotels')}>Hotels</NavLink>
          <NavLink onClick={() => onNavClickHandler('#things-to-do')}>Things To Do</NavLink>
        </LinkRow>
      )}

      <AccommodationsContent>

        <SectionTitle title="Hotel" anchor="hotels" />

        <div style={{ textAlign: "center" }}>
          <img
            src="https://r-cf.bstatic.com/images/hotel/max1024x768/196/19663590.jpg"
            alt=""
            style={{ maxHeight: "300px" }}
          />
        </div>

        <div>
          <p>
            Lodging will be held at the <a href="https://www.marriott.com/events/start.mi?id=1599574980260&key=GRP" target="_blank" rel="noreferrer">Boston Marriott Peabody</a> located at <a href="https://www.google.com/maps/place/8A+Centennial+Dr,+Peabody,+MA+01960/@42.5244553,-70.9595023,17z/data=!3m1!4b1!4m5!3m4!1s0x89e312ff817aa5e9:0xcc2a24b0b569fa4a!8m2!3d42.5244553!4d-70.9573136" traget="_blank" rel="noreferrer">8A Centennial Dr, Peabody, MA 01960.</a>
          </p>
          <p>
            If you plan to book a room, please do so <strong>before August 13th</strong> to receive the wedding discount price.
          </p>
          <p>This is the hotel where the wedding party will be staying. Join us here for the after-party!</p>

          <div>
              <p>If you're calling to book, please book under <strong>"Murphy-Marlowe Wedding Block"</strong></p>
            </div>

          <LinkRow>
            <p>
              <a href="https://www.marriott.com/events/start.mi?id=1599574980260&key=GRP" target="_blank" rel="noreferrer">
                Book Here for Wedding Discount Rate
              </a>
            </p>
          </LinkRow>
        </div>

        <SectionTitle title="Things To Do" anchor="things-to-do" />

        <AttractionTitle>
          <h2>Salem Witch Museum</h2>
        </AttractionTitle>

        <div style={{ textAlign: "center" }}>
          <img
            src="https://res.cloudinary.com/drzgzthur/image/upload/v1600276086/MandJ/we-love-salem.png"
            alt=""
            style={{ maxHeight: "300px" }}
          />
        </div>

        <p>
          We've visited this museum/show a few times and still find it super interesting and captivating. This theatre style, narrated presentation, describes the events that led to the infamous Salem Witch Trials of 1692. They run shows every half hour, and it's a great way to jumpstart your Fall/Halloween season. The show ends with a unique gift shop and has a little something for everyone.
        </p>

        <AttractionTitle>
          <h2>Howling Wolf Taqueria</h2>
        </AttractionTitle>

        <div style={{ textAlign: "center" }}>
          <img
            src="https://res.cloudinary.com/drzgzthur/image/upload/v1600014967/MandJ/wolf.png"
            alt=""
            style={{ maxHeight: "300px" }}
          />
        </div>

        <p>
          We stumbled upon this restaurant on one of our annual trips to Salem and fell-in-love!! This place is an absolute gem. The Howling Wolf is best described as a scratch kitchen, which means all of their ingredients are made daily. Its authentic Mexican cuisine includes a few twists on some favorites. <em>Our Favorite</em>: fried avocados — don't knock it til' you try it! With a wide array of drinks and a full-length bar, this is an excellent place if you want to stop in for drinks, apps, or a full meal. Also, live music? Yup. What more could you want?
        </p>

        <AttractionTitle>
          <h2>Clam Box of Ipswich</h2>
        </AttractionTitle>
        <div>
          <div style={{ textAlign: "center" }}>
            <img
              src="https://farm8.staticflickr.com/7098/7340579300_0128224f9d_b.jpg"
              alt=""
              style={{ maxHeight: "300px" }}
            />
          </div>

          <p>
            Closeout the end of summer with some seafood favorites at The Clam Box! The line moves quickly, and they have plenty of seating available inside. It has been a classic landmark with over 70 years of running the business.
          </p>

          <AttractionTitle>
            <h2>Crane Beach</h2>
          </AttractionTitle>

          <div style={{ textAlign: "center" }}>
            <img
              src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F99174932%2F438679055536%2F1%2Foriginal.20200421-150227?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C151%2C1200%2C600&s=4069ba4ff5e7b1017a481a3d353031c6"
              alt=""
              style={{ maxHeight: "300px" }}
            />
          </div>

          <p>
            This is an incredible beach! Soft sand, clear water, dunes, ample parking, and a small shop to buy sandwiches, snacks, and beverages. What a great way to relax and kick your feet up after a wedding!
          </p>
        </div>

        <SectionTitle title="Travel" anchor="travel" />

        <div style={{ textAlign: "center" }}>
          <img
            src="https://lh3.googleusercontent.com/proxy/wgoHgeyLiolp2x4orF1mjT0Ut7dEtziF9fip-Zivd5PqNqqnkJB1pWOzUI4Z3Wcp72gz31A9hE5ssleUU3Vr8PagsPU6Cwe9"
            alt=""
          />
        </div>

        <div>
          <p>
            More details to come, but shuttles will be provided between Boston Marriott Peabody Hotel and Danversport. Please note that there will not be transportation to or from the church.
          </p>
        </div>
      </AccommodationsContent>

      <Footer />
    </Layout>
  )
}
