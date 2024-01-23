import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usePopularDataStore } from '@/store/usePopularDataStore'
import styled from 'styled-components'
import getPopularData from '@/api/getPopularData'
import { Link as RouterLink } from 'react-router-dom'
import { movieGenres } from '@/utils/genresData'
import {
  PopularDataItem,
  WatchProviderKRItems,
  popularContentsWatchProviderData
} from '@/types/mainPage/bestContents'
import getWatchProviders from '@/api/getWatchProviders'

interface BestContentsProps {
  index?: number
  borderbottom?: string
}

interface SubstanceProps {
  width?: string
}

function BestContents() {
  const { populardata, setPopularData } = usePopularDataStore()
  const [popularContentsId, setPopularContentsId] = useState<number[]>([])
  const [popularContentsWatchProvider, setpopularContentsWatchProvider] =
    useState<popularContentsWatchProviderData>()
  const [isHovered, setIsHovered] = useState(false)
  const [hoverItemId, setHoverItemId] = useState<number>()

  useEffect(() => {
    const fetchingPopularData = async () => {
      const data = await getPopularData()
      setPopularData(data)
      const popularId = data.results.map((item: { id: number }) => item.id)

      setPopularContentsId(popularId)

      const fetchingWatchProvider = async () => {
        const data = await Promise.all(
          popularId?.map((id: number) => getWatchProviders(id))
        )
        setpopularContentsWatchProvider(data)
      }

      fetchingWatchProvider()
    }

    fetchingPopularData()
  }, [])

  const handleHover = (event: MouseEvent, item: PopularDataItem) => {
    const target = event.target as HTMLElement
    const targetId = target.id
    setHoverItemId(item.id)
    if (item.id.toString() === targetId) {
      setIsHovered(true)
    }
  }

  return (
    <BestContentsContainer>
      {populardata?.results?.slice(0, 3).map((item, index) => (
        <BestContentsWrapper
          to=""
          id={item.id.toString()}
          key={index}
          index={index}
          layoutId="container"
          onHoverStart={(event: MouseEvent) => handleHover(event, item)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <BestContentsImg
            src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
            alt={item.title}
          />
          <ContentsTitle
            layoutId="child1"
            animate={{
              color:
                hoverItemId === item.id && isHovered === true
                  ? '#13cd86'
                  : '#222222'
            }}
          >
            {/* {' '} */}
            {item.title}
          </ContentsTitle>
          <ContentsWrapper>
            <ContentsOverview>{item.overview}</ContentsOverview>

            <ContentsGenreWrapper index={index}>
              <SubstanceTitle>장르</SubstanceTitle>

              {item.genre_ids.slice(0, 3).map((id: number, index: number) => {
                const genre = movieGenres.genres.find(genre => genre.id === id)
                return <Substance key={index}>{genre?.name}</Substance>
              })}
            </ContentsGenreWrapper>
            <ContentsGenreWrapper>
              <SubstanceTitle>평점</SubstanceTitle>
              <Substance>{item.vote_average}</Substance>
            </ContentsGenreWrapper>
            <ContentsGenreWrapper borderbottom="0.5px solid #bbbaba">
              <SubstanceTitle key={index}>채널</SubstanceTitle>
              {popularContentsWatchProvider?.map((providerItem, index) => {
                const providerKR = providerItem.results['KR']
                let providerName = ''
                if (item.id === providerItem.id && providerKR) {
                  if (Array.isArray(providerKR.flatrate)) {
                    providerName = providerKR.flatrate
                      .map(providerItem => providerItem.provider_name)
                      .join(', ')
                  } else if (Array.isArray(providerKR.buy)) {
                    providerName = providerKR.buy
                      .map(providerItem => providerItem.provider_name)
                      .join(', ')
                  }
                  return <Substance key={index}>{providerName}</Substance>
                } else if (item.id === providerItem.id && !providerKR) {
                  providerName = '-'
                  return <Substance key={index}>{providerName}</Substance>
                } else {
                  return null
                }
              })}
            </ContentsGenreWrapper>
          </ContentsWrapper>
          <MoreButton
            index={index}
            animate={{
              color:
                hoverItemId === item.id && isHovered === true
                  ? '#13cd86'
                  : '#303032',
              borderBottomColor:
                hoverItemId === item.id && isHovered === true
                  ? '#13cd86'
                  : '#303032'
            }}
            transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
            layoutId="child2"
          >
            More
          </MoreButton>
        </BestContentsWrapper>
      ))}
    </BestContentsContainer>
  )
}

export default BestContents

const BestContentsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1.2fr 0.8fr;
  height: 720px;
  grid-column-gap: 3rem;
  margin: 150px 50px 100px;
`
const MotionLink = motion(RouterLink)

const BestContentsWrapper = styled(MotionLink)<BestContentsProps>`
  grid-column: ${({ index }) => (index === 0 ? 'span 2' : 'span 1')};
  grid-row: ${({ index }) => (index === 0 ? 'span 2' : 'span 1')};
  display: flex;
  flex-direction: column;
  &:active {
    color: #13cd86;
  }
`

const BestContentsImg = styled.img`
  width: 100%;
  max-width: 800px;
`
const ContentsTitle = styled(motion.p)`
  font-weight: 600;
  margin-bottom: 6px;
  font-size: 18px;
  color: #222222;
`

const MoreButton = styled(motion.button)<BestContentsProps>`
  justify-self: flex-start;
  display: flex;
  align-items: flex-end;
  padding-bottom: 8px;
  border-bottom: 1px solid #303032;
  font-family: 'Josefin Sans', sans-serif;
  margin: 6px 0;
  padding: ${({ index }) => (index === 0 ? '20px 0' : '10px 0')};
`

const ContentsWrapper = styled.div`
  height: 200px;
`

const ContentsOverview = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 300;
  font-size: 14px;
  color: #444444;
`

const ContentsGenreWrapper = styled.div<BestContentsProps>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  border-top: 0.5px solid #bbbaba;
  border-bottom: ${({ borderbottom }) => borderbottom};
  padding: 10px 0;
`

const Substance = styled.span<SubstanceProps>`
  font-weight: 300;
  height: 100%;
  font-size: 14px;
  color: #707070;
`
const SubstanceTitle = styled(Substance)`
  font-weight: 600;
  display: block;
  color: #444;
`
