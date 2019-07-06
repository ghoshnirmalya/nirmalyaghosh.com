import * as React from 'react'

import Layout from '../layouts'
import Hero from '../components/sections/hero'
import SocialProfiles from '../components/sections/social-profiles'
import Projects from '../components/sections/projects'
import Blogs from '../components/sections/blogs'
import Footer from '../components/sections/footer'

const IndexPage = () => (
  <>
    <Layout>
      <Hero />
      <SocialProfiles />
      <Projects />
      <Blogs />
    </Layout>
    <Footer />
  </>
)

export default IndexPage
