import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import SectionTitle from "../components/Helpers/SectionTitle"
import RegistryItem from "../components/RegistryItem/RegistryItem"

const RegistryRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  margin: ${rhythm(1)} ${rhythm(1)} ${rhythm(5)};
`

export default function Index() {
  return (
    <Layout>
      <Header />
      <SectionTitle title="Registry" />
      <RegistryRow>
        <RegistryItem
          store=""
          link="https://www.crateandbarrel.com/gift-registry/jillian-marlowe-and-michael-murphy/r6166197"
          logoUrl="https://i.pinimg.com/originals/67/3d/8d/673d8d1ae65e5b9cdbd27bd76e6c6595.jpg"
        />
        <RegistryItem
          store=""
          link="https://www.target.com/gift-registry/giftgiver?registryId=b13a55fe702346bdb5fa92ecca61d4ec"
          logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Target_Corporation_logo_%28vector%29.svg/1024px-Target_Corporation_logo_%28vector%29.svg.png"
        />
      </RegistryRow>
      <Footer />
    </Layout>
  )
}
