import styled from 'styled-components'

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px;
  gap: 8px;

  /* glede na Figma: */
  width: 402px;
  height: 48px;

  background: #EDF4F2;
  border-radius: 16px;
`

export const TabButton = styled.button<{ active?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  width: 126px;
  height: 40px;
  min-height: 40px;

  border: none;
  border-radius: 16px;
  background: ${({ active }) => (active ? '#272D2D' : '#EDF4F2')};
  color: ${({ active }) => (active ? '#FFFFFF' : '#272D2D')};

  font-size: ${({ theme }) => theme.font.sizes.body};
  font-weight: 500;
  cursor: pointer;

  /* Flex properties from Figma: */
  flex: none;
  order: 0;
  flex-grow: 0;

  &:hover {
    background: ${({ active }) => (active ? '#272D2D' : '#E0E8E6')};
  }
`
