import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieDetail from '@/components/detailpage/MovieDetail'
import TVDetail from '@/components/detailpage/TVDetail'
import Header from '@/layout/Header'
import styled from 'styled-components'

function DetailPage() {
  let { id: detailId } = useParams()
  let { type: detailType } = useParams()
  const detailContentsId = parseInt(detailId || '0')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (detailType === 'movie') {
    return (
      <>
        <HeaderWrapper>
          <Header review="writing" margin="36px 0 0 0 " />
        </HeaderWrapper>
        <MovieDetail />
      </>
    )
  } else {
    return (
      <>
        <HeaderWrapper>
          <Header review="writing" margin="36px 0 0 0 " />
        </HeaderWrapper>
        <TVDetail />
      </>
    )
  }
}

export default DetailPage

const HeaderWrapper = styled.div`
  padding-right: 36px;
`
