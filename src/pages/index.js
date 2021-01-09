import React from 'react'

import Head from 'next/head'

import { WrapperContainer } from '../styles/pages/Home'
import Header from '../components/Header'

const Index = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='description' content='This is a description' />
      </Head>

      <WrapperContainer>
        <Header className='text-2xl'>LOGO</Header>
      </WrapperContainer>
    </>
  )
}
export default Index
