import React from "react"

import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import ImageGallery from "../components/ImageGallery/ImageGallery"
import Footer from "../components/Footer/Footer"
import SectionTitle from "../components/Helpers/SectionTitle"
import CenteredDiv from "../components/Helpers/CenteredDiv"

export default function Photos() {
  return (
    <Layout>
      <Header />
      <SectionTitle title="Photos" />
      <ImageGallery/>
      <CenteredDiv>
        <p>Photos By</p>
        <a href="https://www.thomsonandthomsonphoto.com/" target="_blank" rel="noreferrer">
          <img src="https://res.cloudinary.com/drzgzthur/image/upload/v1599679644/MandJ/weblogo.webp" alt=""/>
        </a>
      </CenteredDiv>
      <Footer />
    </Layout>
  )
}
