import React from 'react'
import Head from 'next/head'
import Main from "../components/Main"
// import "../scss/style.scss"
import "../css/style.css"

const Home = () => (
  <div>
    <Head>
      <title>React to Sketch</title>
      <link rel="icon" href="/favicon.ico" />
	  <link href="/favicon.ico" />
    </Head>
	<Main className="main"/>
  </div>
)

export default Home
