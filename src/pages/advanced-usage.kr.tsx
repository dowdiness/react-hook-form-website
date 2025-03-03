import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AdvancedUsage from "../components/AdvancedUsage"
import advanced from "../data/advanced"

const Api = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="kr">
    <Seo title={advanced.title.kr} location={location} />
    <AdvancedUsage defaultLang="kr" />
  </Layout>
)

export default Api
