import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'
import { useStaticQuery, graphql } from 'gatsby'

export const Testimonials = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
      name: {in: ["testimonial-1", "testimonial-2"]}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  `)

  return (
    <TestimonialsContainer>
      <TopLine>
        Depoimentos
      </TopLine>
      <Description>
        O que as pessoas estão dizendo
      </Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline css={`color: #3FFFA8; font-size: 2rem; margin-botom: 1rem;`}/>
            <h3>João da Silva</h3>
            <p>"A melhor experiência da minha vida"</p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb css={`color: #F9B19B; font-size: 2rem; margin-botom: 1rem;`}/>
            <h3>Maria Joana</h3>
            <p>"Foi muito fácil encontrar uma viagem, todas as minhas perguntas foram respondidas e eles me deram
              o melhor preço entre todas as companhias que pesquisei"</p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
        {data.allFile.edges.map((image, key) => (
          <Images key={key} fluid={image.node.childImageSharp.fluid}/>
        ))}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #FCFCFC;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`
const TopLine = styled.div`
  color: #077BF1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`
const Description = styled.div`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;  
`
const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5 rem;
    font-style: italic;
  }

  p {
    color: #3B3B3B;
  }
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top; 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-colums: 1fr;
  }
`
const Images = styled(Img)`
  border-radius: 10px;
`
