import React from 'react'
import styled from 'styled-components'

const LinesContainer = styled.div`
  position: absolute;
  /* border: 10px solid red; */
  height: 100vh;
  width: 100%; /* 부모 너비를 가득 채우도록 설정 */
  z-index: -1;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, auto);
  gap: 1px;
`

const Column = styled.div`
  background-color: #c0c0c0;
  height: 100vh;
  /* width: 100px; */
`

const VerticalLinesExample: React.FC = () => {
  return (
    <LinesContainer>
      <Container>
        <Column></Column>
        <Column></Column>
        <Column></Column>
        <Column></Column>
        <Column></Column>
        <Column></Column>
        <Column></Column>
        <Column></Column>
      </Container>
    </LinesContainer>
  )
}

export default VerticalLinesExample
