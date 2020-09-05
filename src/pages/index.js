import React from "react"
import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import FeaturedImage from "../components/Header/FeaturedImage"
import Details from "../components/Details/Details"
import Footer from "../components/Footer/Footer"

export default function Index() {
  return (
    <Layout>
      <Header />
      <FeaturedImage />
      <Details />
      <Footer />
    </Layout>
  )
}
