import * as React from 'react'
import Particles from 'react-particles-js';
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import Hero from '../components/sections/hero'
import SocialProfiles from '../components/sections/social-profiles'
import Projects from '../components/sections/projects'
import Blogs from '../components/sections/blogs'
import Footer from '../components/sections/footer'
import Content from '../components/content'

import favicon from '../static/images/favicon.png'

const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: rgba(4,17,31,1);
  background: linear-gradient(180deg,rgba(1, 28, 66, 1) 0%,rgba(4,17,31,1) 100%);
  color: #f1f1f1;
  font-size: 16px;

  a {
    color: #03a9f4;
    text-decoration: none;
    z-index: 1;

    &:hover {
      color: #65cfff;
    }
  }

  .background-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
  }
`

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const IndexPage: React.FC = () => (
  <StaticQuery
    query={graphql`
      query IndexPageQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}

    render={(data: StaticQueryProps) => (
      <StyledLayout>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
          link={[
            { rel: "icon", type: "image/png", sizes: "16x16", href: `${favicon}` },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Content>
          <div className="background-container">
            <Particles
              params={{
                "particles": {
                  "number": {
                    "value": 200,
                    "density": {
                      "enable": true
                    }
                  },
                  "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                      "speed": 4,
                      "size_min": 0.3
                    }
                  },
                  "line_linked": {
                    "enable": false
                  },
                  "move": {
                    "random": true,
                    "speed": 1,
                    "direction": "top",
                    "out_mode": "out"
                  }
                },
                "interactivity": {
                  "events": {
                    "onhover": {
                      "enable": false,
                      "mode": "bubble"
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "repulse"
                    }
                  },
                  "modes": {
                    "bubble": {
                      "distance": 250,
                      "duration": 2,
                      "size": 0,
                      "opacity": 0
                    },
                    "repulse": {
                      "distance": 400,
                      "duration": 4
                    }
                  }
                }
              }} />
          </div>
          <Hero />
          <SocialProfiles />
          <Projects />
          <Blogs />
          <Footer />
        </Content>
      </StyledLayout>
    )}
  />
)

export default IndexPage
