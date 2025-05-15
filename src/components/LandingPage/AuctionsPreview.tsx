import React from 'react'
import styled from 'styled-components'
import previewSrc from '../../assets/auctions.png'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;      /* centriraj vodoravno */
  margin-top: 32px;             /* po potrebi prilagodi razmik od Hero */
`

const Image = styled.img`
  width: 1144px;                /* Figma: Width 1144px */
  height: 812px;                /* Figma: Height 812px */
  border-radius: 32px;          /* Figma: Radius 32px */
  border: 8px solid rgba(39, 45, 45, 0.5); /* #272D2D @ 50% opacity */
  object-fit: cover;
`

export const AuctionsPreview: React.FC = () => (
  <Wrapper>
    <Image src={previewSrc} alt="Auctions preview" />
  </Wrapper>
)
