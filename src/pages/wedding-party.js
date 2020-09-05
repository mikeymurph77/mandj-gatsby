import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import FeaturedImage from "../components/Header/FeaturedImage"
import Footer from "../components/Footer/Footer"
import SectionTitle from "../components/Helpers/SectionTitle"
import WeddingPartyProfile from "../components/WeddingPartyProfile/WeddingPartyProfile"

const HisHerContainer = styled.div`
  text-align: center;
  display: grid;
  margin-right: 15px;
  margin-left: 15px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas: ". ." ". ." ". ." ". ." ". ." ". ." ". ." ". .";
`

export default function Index() {
  return (
    <Layout>
      <Header />
      <FeaturedImage />
      <SectionTitle title="Wedding Party" />

      <HisHerContainer>
        <WeddingPartyProfile
          name="Pat Curran"
          photo="https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"
          role="Best Man"
          columnTitle="His"
        />
        <WeddingPartyProfile
          name="Kristy Marlowe"
          photo="https://thehuboncanal.org/wp-content/uploads/2016/11/FEMALE-PERSON-PLACEHOLDER.jpg"
          role="Maid of Honor"
          columnTitle="Hers"
        />
        <WeddingPartyProfile
          name="Graham Gaspar"
          photo="https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-person-gray-photo-placeholder-man-t-shirt-white-background-134696022.jpg"
        />
        <WeddingPartyProfile
          name="Marina Nedeljkovic"
          photo="https://cdrd.edu.np/wp-content/uploads/2019/05/person-gray-photo-placeholder-woman-vector-22964655.jpg"
        />
        <WeddingPartyProfile
          name="Justin Vanportfliet"
          photo="https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"
        />
        <WeddingPartyProfile
          name="Kalene Griffin"
          photo="https://thehuboncanal.org/wp-content/uploads/2016/11/FEMALE-PERSON-PLACEHOLDER.jpg"
        />
        <WeddingPartyProfile
          name="Mike Shi"
          photo="https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-person-gray-photo-placeholder-man-t-shirt-white-background-134696022.jpg"
        />
        <WeddingPartyProfile
          name="Rachel Levy"
          photo="https://cdrd.edu.np/wp-content/uploads/2019/05/person-gray-photo-placeholder-woman-vector-22964655.jpg"
        />
        <WeddingPartyProfile
          name="Jeff DeCristofaro"
          photo="https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-person-gray-photo-placeholder-man-t-shirt-white-background-134696022.jpg"
        />
        <WeddingPartyProfile
          name="Hayley Grove"
          photo="https://cdrd.edu.np/wp-content/uploads/2019/05/person-gray-photo-placeholder-woman-vector-22964655.jpg"
        />
        <WeddingPartyProfile
          name="Brett Wheeler"
          photo="https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"
        />
        <WeddingPartyProfile
          name="Kayla Gaspar"
          photo="https://thehuboncanal.org/wp-content/uploads/2016/11/FEMALE-PERSON-PLACEHOLDER.jpg"
        />
        <WeddingPartyProfile
          name="Jeffery Marlowe"
          photo="https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-person-gray-photo-placeholder-man-t-shirt-white-background-134696022.jpg"
        />
        <WeddingPartyProfile
          name="Brianna Murphy"
          photo="https://cdrd.edu.np/wp-content/uploads/2019/05/person-gray-photo-placeholder-woman-vector-22964655.jpg"
        />
        <WeddingPartyProfile
          name="Kevin Marlowe"
          photo="https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-person-gray-photo-placeholder-man-t-shirt-white-background-134696022.jpg"
        />
        <WeddingPartyProfile
          name="Amanda Murphy"
          photo="https://cdrd.edu.np/wp-content/uploads/2019/05/person-gray-photo-placeholder-woman-vector-22964655.jpg"
        />
      </HisHerContainer>
      <Footer />
    </Layout>
  )
}
