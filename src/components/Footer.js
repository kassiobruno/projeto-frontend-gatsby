import React from 'react'
import styled from 'styled-components'
//import { Link } from 'gatsby'

const Footer = () => {
  return (
    <FooterContainer>

      <FooterLinksWrapper>

        <FooterDesc>
        <h1>Explorer Travel</h1>
        <p>Nós nos esforçamos para criar as melhores experiências para nossos clientes</p>
        </FooterDesc>
        
        <FooterLinkItems>
        <FooterLinkTitle>Contate-nos</FooterLinkTitle>
          <FooterLink to="/about">Contato</FooterLink>
          <FooterLink to="/">Suporte</FooterLink>
          <FooterLink to="/">Destinos</FooterLink>
          <FooterLink to="/">Patrocinadores</FooterLink>
        </FooterLinkItems>

      </FooterLinksWrapper>

      <FooterLinksWrapper>
      <FooterLinkItems>
        <FooterLinkTitle>Videos</FooterLinkTitle>
          <FooterLink to="/">Enviar Video</FooterLink>
          <FooterLink to="/">Embaixadores</FooterLink>
          <FooterLink to="/">Agências</FooterLink>
          <FooterLink to="/">Influenciadores</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>

      <FooterLinksWrapper>
      <FooterLinkItems>
        <FooterLinkTitle>Mídias Sociais</FooterLinkTitle>
          <FooterLink to="/">Instagram</FooterLink>
          <FooterLink to="/">Facebook</FooterLink>
          <FooterLink to="/">Youtube</FooterLink>
          <FooterLink to="/">Twitter</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>

    </FooterContainer >
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #FAFAFB;
`

const FooterDesc = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    color: #F26A2E;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`

const FooterLink = styled.div`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3D3D4E;

  &:hover {
    color: #F26A2E;
    transition: 0.3s ease-out;
  }
`