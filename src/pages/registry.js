import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import SectionTitle from "../components/Helpers/SectionTitle"
import RegistryItem from "../components/RegistryItem/RegistryItem"
import CenteredDiv from "../components/Helpers/CenteredDiv"

const RegistryRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: ${rhythm(1)} ${rhythm(1)} ${rhythm(5)};
`

const CommingSoon = styled.img`
  max-width: 400px;
`;

export default function Index() {
  return (
    <Layout>
      <Header />
      <SectionTitle title="Registry" />

      <CenteredDiv>
        <CommingSoon src="https://res.cloudinary.com/drzgzthur/image/upload/v1600276165/MandJ/Coming-Soon-image.jpg" alt="Coming Soon" />
      </CenteredDiv>
      {/* <RegistryRow>
        <RegistryItem
          store="Crate & Barrel"
          link="https://www.crateandbarrel.com/gift-registry/"
          logoUrl="https://i.pinimg.com/originals/67/3d/8d/673d8d1ae65e5b9cdbd27bd76e6c6595.jpg"
        />
        <RegistryItem
          store="Target"
          link="https://www.target.com/gift-registry/"
          logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Target_Corporation_logo_%28vector%29.svg/1024px-Target_Corporation_logo_%28vector%29.svg.png"
        />
        <RegistryItem
          store="Home Depot"
          link="https://www.homedepot.com/collection/home-decor/perfect-registry-picks"
          logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/227px-TheHomeDepot.svg.png"
        />
      </RegistryRow> */}
      <Footer />
    </Layout>
  )
}
