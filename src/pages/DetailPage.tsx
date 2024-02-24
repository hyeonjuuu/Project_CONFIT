import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieDetail from '@/components/detailpage/MovieDetail'
import TVDetail from '@/components/detailpage/TVDetail'

function DetailPage() {
  let { id: detailId } = useParams()
  let { type: detailType } = useParams()
  const detailContentsId = parseInt(detailId || '0')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (detailType === 'movie') {
    return <MovieDetail />
  } else {
    return <TVDetail />
  }
}

export default DetailPage
