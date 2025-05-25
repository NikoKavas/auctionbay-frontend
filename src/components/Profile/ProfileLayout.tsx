import styled from 'styled-components'

/**
 * Zunanji container poravna content na sredino in
 * omeji širino na 1440px (kot v dizajnu).
 */
export const ProfileWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px;
`

export const ProfileContent = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  margin-top: 24px;
`
