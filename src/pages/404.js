import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from '../components/Page/styled'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <S.MainContent>
      <h1>404</h1>
      <p>Ops... não tem nada aqui.</p>
    </S.MainContent>
  </Layout>
)

export default NotFoundPage
