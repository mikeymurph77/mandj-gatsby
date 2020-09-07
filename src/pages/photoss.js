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
          <img src="https://static.wixstatic.com/media/36e7ab_df61ec1b8035472f95b809c47270a1e1~mv2.jpg/v1/fill/w_484,h_148,al_c,q_80,usm_0.66_1.00_0.01/weblogo.webp" alt=""/>
        </a>
      </CenteredDiv>
      <Footer />
    </Layout>
  )
}
