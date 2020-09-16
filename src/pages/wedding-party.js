import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
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
      <SectionTitle title="Wedding Party" />

      <HisHerContainer>
        <WeddingPartyProfile
          name="Patrick Curran"
          photo="https://res.cloudinary.com/drzgzthur/image/upload/v1599522172/MandJ/wedding-party/pat-optimized.jpg"
          role="Best Man"
          columnTitle="His"
        />
        <WeddingPartyProfile
          name="Kristy Marlowe"
          photo="https://res.cloudinary.com/drzgzthur/image/upload/v1599489813/MandJ/wedding-party/kristy-optimized.jpg"
          role="Maid of Honor"
          columnTitle="Hers"
        />
        <WeddingPartyProfile
          name="Graham Gaspar"
          photo="https://res.cloudinary.com/drzgzthur/image/upload/v1599522738/MandJ/wedding-party/graham-optimized.jpg"
          role="Groomsman"
        />
        <WeddingPartyProfile
          name="Marina Nedeljkovic"
          photo="https://res.cloudinary.com/drzgzthur/image/upload/v1599523214/MandJ/wedding-party/marina-optimized.jpg"
          role="Bridesmaid"
        />
        <WeddingPartyProfile
          name="Justin Vanportfliet"
          photo="https://res.cloudinary.com/drzgzthur/image/upload/v1599490531/MandJ/wedding-party/justin-optimized.jpg"
          role="Groomsman"
        />
        <WeddingPartyProfile
          name="Kayla Gaspar"
          photo="https://res.cloudinary.com/drzgzthur/image/upload/v1599679400/MandJ/wedding-party/kayla-optimized.jpg"
          role="Bridesmaid"
        />
        <WeddingPartyProfile
          name="Jeffrey Marlowe"
          photo="https://res.cloudinary.com/drzgzthur/image/upload/v1599491788/MandJ/wedding-party/jeff-m-optimized.jpg"
          role="Groomsman"
        />
        <WeddingPartyProfile
          name="Brianna Murphy"
          photo="https://res.cloudinary.com/drzgzthur/image/upload/v1599492428/MandJ/wedding-party/brianna-optimized.jpg"
          role="Bridesmaid"
        />
        <WeddingPartyProfile
          name="Kevin Marlowe"
          photo="https://res.cloudinary.com/drzgzthur/image/upload/v1599489739/MandJ/wedding-party/kevin-optimized.jpg"
          role="Groomsman"
        />
        <WeddingPartyProfile
          name="Amanda Murphy"
          photo="https://res.cloudinary.com/drzgzthur/image/upload/v1599489548/MandJ/wedding-party/amanda-optimized.jpg"
          role="Bridesmaid"
        />
        <WeddingPartyProfile
          name="Michael Shi"
          photo="https://res.cloudinary.com/drzgzthur/image/upload/v1599520823/MandJ/wedding-party/mike-optimized.jpg"
          role="Groomsman"
        />
        <WeddingPartyProfile
          name="Kalene Griffin"
          photo="https://res.cloudinary.com/drzgzthur/image/upload/v1599524542/MandJ/wedding-party/kalene-optimized.jpg"
          role="Bridesmaid"
        />
        <WeddingPartyProfile
          name="Jeffrey DeCristofaro"
          photo="https://res.cloudinary.com/drzgzthur/image/upload/v1600038239/MandJ/wedding-party/jeff-optimized.jpg"
          role="Groomsman"
        />
        <WeddingPartyProfile
          name="Rachael Levy"
          photo="https://res.cloudinary.com/drzgzthur/image/upload/v1599522599/MandJ/wedding-party/rachel-optimized.jpg"
          role="Bridesmaid"
        />
        <WeddingPartyProfile
          name="Brett Wheeler"
          photo="https://res.cloudinary.com/drzgzthur/image/upload/v1599522086/MandJ/wedding-party/brett-optimized.jpg"
          role="Groomsman"
        />
        <WeddingPartyProfile
          name="Hayley Grove"
          photo="https://res.cloudinary.com/drzgzthur/image/upload/v1599490030/MandJ/wedding-party/hayley-optimized.jpg"
          role="Bridesmaid"
        />
      </HisHerContainer>
      <Footer />
    </Layout>
  )
}
