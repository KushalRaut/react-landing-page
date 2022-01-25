import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinksItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/siginin">How It Works</FooterLink>
                <FooterLink to="/siginin">Testimonials</FooterLink>
                <FooterLink to="/siginin">Careers</FooterLink>
                <FooterLink to="/siginin">Investors</FooterLink>
                <FooterLink to="/siginin">Terms of Services</FooterLink>
              </FooterLinksItems>
              <FooterLinksItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/siginin">How It Works</FooterLink>
                <FooterLink to="/siginin">Testimonials</FooterLink>
                <FooterLink to="/siginin">Careers</FooterLink>
                <FooterLink to="/siginin">Investors</FooterLink>
                <FooterLink to="/siginin">Terms of Services</FooterLink>
              </FooterLinksItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinksItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/siginin">How It Works</FooterLink>
                <FooterLink to="/siginin">Testimonials</FooterLink>
                <FooterLink to="/siginin">Careers</FooterLink>
                <FooterLink to="/siginin">Investors</FooterLink>
                <FooterLink to="/siginin">Terms of Services</FooterLink>
              </FooterLinksItems>
              <FooterLinksItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/siginin">How It Works</FooterLink>
                <FooterLink to="/siginin">Testimonials</FooterLink>
                <FooterLink to="/siginin">Careers</FooterLink>
                <FooterLink to="/siginin">Investors</FooterLink>
                <FooterLink to="/siginin">Terms of Services</FooterLink>
              </FooterLinksItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">dolla</SocialLogo>
              <WebsiteRights>
                Dolla © 2022-01-12 All rights reserved.{' '}
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer
