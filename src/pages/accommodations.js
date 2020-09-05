import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { isMobile } from "react-device-detect";
import { navigate } from '@reach/router';

import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import FeaturedImage from "../components/Header/FeaturedImage"
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
`

const AccommodationsContent = styled.div`
  margin-right: 15px;
  margin-left: 15px;
`;

const onNavClickHandler = (anchor) => {
  navigate(anchor);
}

export default function Accommodations() {


  return (
    <Layout>
      <Header />
      <FeaturedImage />
      <SectionTitle title="Accommodations" />

      {!isMobile && (
        <LinkRow>
          <NavLink onClick={() => onNavClickHandler('#travel')}>Travel</NavLink>
          <NavLink onClick={() => onNavClickHandler('#hotels')}>Hotels</NavLink>
          <NavLink onClick={() => onNavClickHandler('#things-to-do')}>Things To Do</NavLink>
        </LinkRow>
      )}

      <AccommodationsContent>

        <SectionTitle title="Travel" anchor="travel" />

        <div style={{ textAlign: "center" }}>
          <img
            src="https://lh3.googleusercontent.com/proxy/wgoHgeyLiolp2x4orF1mjT0Ut7dEtziF9fip-Zivd5PqNqqnkJB1pWOzUI4Z3Wcp72gz31A9hE5ssleUU3Vr8PagsPU6Cwe9"
            alt=""
          />
        </div>

        <div>
          <p>
            Et suspendisse neque id placerat nec vivamus adipiscing, vitae amet
            facilisis malesuada elit turpis platea, quis aliquam molestie dictum
            cum scelerisque. Aptent sollicitudin dapibus eleifend taciti ridiculus
            nisl auctor, enim tortor torquent per phasellus nam at tempus, sociis
            eu elit risus dis nunc. Convallis parturient curae id facilisis etiam
            risus laoreet mollis nisl, consequat morbi enim habitasse cursus
            pretium consectetur fames inceptos lobortis, sociis facilisi fermentum
            malesuada dignissim mus arcu est.
          </p>

          <p>
            Condimentum turpis tempus primis nibh massa lacinia consectetur
            vestibulum purus, lectus felis iaculis quam tortor lorem pharetra
            laoreet placerat, habitant aliquet aenean eu vehicula ad suspendisse
            scelerisque. Potenti cum fringilla nullam dis hendrerit ultricies
            fermentum ornare consequat morbi mauris, enim sociis natoque elementum
            parturient habitasse turpis quisque et.
          </p>
        </div>

        <SectionTitle title="Hotels" anchor="hotels" />

        <div style={{ textAlign: "center" }}>
          <img
            src="https://r-cf.bstatic.com/images/hotel/max1024x768/196/19663590.jpg"
            alt=""
            style={{ maxHeight: "300px" }}
          />
        </div>

        <div>
          <p>
            Parturient amet sit accumsan turpis donec quam, vulputate euismod
            ultricies nascetur id pulvinar nulla, consectetur nunc ornare commodo
            class.
          </p>

          <p>
            Iaculis euismod habitant nascetur auctor ac potenti venenatis dapibus
            primis, ut sociis magna sed dictum quisque conubia fusce ornare
            magnis, adipiscing faucibus facilisis augue semper dui malesuada
            ultrices. Proin ante neque porttitor placerat praesent rhoncus lectus
            dignissim odio, pharetra litora taciti montes accumsan sodales dui
            nibh suscipit sollicitudin, consectetur ipsum primis at feugiat
            tristique pretium dapibus.
          </p>
        </div>

        <SectionTitle title="Things To Do" anchor="things-to-do" />

        <div>
          <div style={{ textAlign: "center" }}>
            <img
              src="https://farm8.staticflickr.com/7098/7340579300_0128224f9d_b.jpg"
              alt=""
              style={{ maxHeight: "300px" }}
            />
          </div>

          <p>
            Scelerisque parturient augue convallis senectus vitae consequat eros
            sollicitudin elementum, ridiculus vivamus justo porta primis mauris
            tincidunt potenti.
          </p>

          <div style={{ textAlign: "center" }}>
            <img
              src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F99174932%2F438679055536%2F1%2Foriginal.20200421-150227?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C151%2C1200%2C600&s=4069ba4ff5e7b1017a481a3d353031c6"
              alt=""
              style={{ maxHeight: "300px" }}
            />
          </div>

          <p>
            Himenaeos velit proin penatibus est feugiat id nam, ultrices justo
            eros arcu tempus ultricies conubia elementum, ligula aliquam platea
            sagittis fames hendrerit. Erat nullam interdum ullamcorper nisl dui
            congue cubilia lectus, nisi bibendum natoque leo elit maecenas
            vulputate aliquam, rutrum adipiscing sodales pellentesque nascetur
            sociis potenti.
          </p>

          <div style={{ textAlign: "center" }}>
            <img
              src="https://i.pinimg.com/originals/c3/d3/52/c3d35268bc033fa0fec170c087334ce7.jpg"
              alt=""
              style={{ maxHeight: "300px" }}
            />
          </div>

          <p>
            Litora habitasse turpis vehicula montes dolor erat, curae penatibus
            torquent integer cum est urna, sed quisque velit etiam suscipit.
          </p>
        </div>
      </AccommodationsContent>

      <Footer />
    </Layout>
  )
}
