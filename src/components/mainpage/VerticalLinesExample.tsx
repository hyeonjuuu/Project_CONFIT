import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  border: 10px solid red;
  /* width: 100vh; */
  height: 100vh;
`

const Line = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: black;
`

const VerticalLinesExample = () => {
  return (
    <Wrapper>
      {[...Array(8)].map((_, index) => (
        <Line key={index} style={{ left: `${(index + 1) * 12.5}%` }} />
      ))}
    </Wrapper>
  )
}

export default VerticalLinesExample
