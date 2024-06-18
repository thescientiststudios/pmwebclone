import React from "react"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      className="wrapper"
      style={{
        minHeight: "100vh",
        marginTop: 0,
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>NOT FOUND</h1>
      <p style={{ marginTop: "2rem", textAlign: "center" }}>
        You just hit a route that doesn&#39;t exist.
        <br />
        Go back to{" "}
        <Link to="/" style={{ borderBottom: "2px solid #000" }}>
          home page
        </Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
