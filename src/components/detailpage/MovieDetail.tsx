import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useSpring
} from 'framer-motion'
import styled from 'styled-components'
import { useDetailDataStore } from '@/store/useDetailDataStore'
import SectionTitle from '@/components/SectionTitle'
import { useEffect, useRef, useState } from 'react'
import { ContentsWatchProviderItem } from '@/types/mainPage/bestContents'
import { useParams } from 'react-router-dom'
import { getMovieDetailData } from '@/api/getDetailData'
import getWatchProviders from '@/api/getWatchProviders'
import ContentsTitle from '../ContentsTitle'

interface ContainerSectionProps {
  margin?: string
}

interface ListDataProps {
  margin?: string
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function MovieDetail() {
  let { id: detailId } = useParams()
  let { type: detailType } = useParams()
  const detailContentsId = parseInt(detailId || '0')
  const { detailMovieData, setDetailMovieData } = useDetailDataStore()
  const [contentsWatchProvider, setContentsWatchProvider] =
    useState<ContentsWatchProviderItem>()
  const ref = useRef(null)

  useEffect(() => {
    const MovieContentsDetailData = async () => {
      const data = await getMovieDetailData(detailContentsId)
      setDetailMovieData(data)
      console.log('movie', data)
    }

    const WatchProviderData = async () => {
      const data = await getWatchProviders(detailContentsId)
      setContentsWatchProvider(data)
      console.log(data)
    }

    MovieContentsDetailData()
    WatchProviderData()
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref
  })
  const y = useParallax(scrollYProgress, -200)
  const { scrollXProgress } = useScroll()
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const krValue = contentsWatchProvider?.results.KR
  console.log(krValue)

  if (detailMovieData && detailType === 'movie') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <ContentsTitle
            textfirst={detailMovieData?.original_title}
            padding="60px 0 0 0"
          />
          <Tagline>{detailMovieData.tagline}</Tagline>
        </div>
        <DetailPageLayout>
          <ContainerSection margin="0 48px">
            <ContentsImage
              src={`https://image.tmdb.org/t/p/original/${detailMovieData?.poster_path}`}
              alt={`${detailMovieData?.title} 포스터`}
            />
          </ContainerSection>
          <ContainerSection style={{ scaleX, y }} ref={ref}>
            <OverviewBox>
              <p>{detailMovieData?.overview}</p>
            </OverviewBox>
            <DetailData>
              <DetailDataItems>
                <ListTitle>타이틀</ListTitle>
                <ListData>{detailMovieData?.title}</ListData>
              </DetailDataItems>
              <DetailDataItems>
                <ListTitle>개봉일</ListTitle>
                <ListData>{detailMovieData?.release_date}</ListData>
              </DetailDataItems>
              <DetailDataItems>
                <ListTitle>장르</ListTitle>
                <ListDataWrapper>
                  {detailMovieData?.genres.map((item, index) => (
                    <ListData key={index}>{item.name}</ListData>
                  ))}
                </ListDataWrapper>
              </DetailDataItems>
              <DetailDataItems>
                <ListTitle>러닝타임</ListTitle>
                <ListData>
                  {`${Math.floor(detailMovieData?.runtime / 60)}시간 ${detailMovieData?.runtime % 60}분`}
                </ListData>
              </DetailDataItems>
              <DetailDataItems>
                <ListTitle>평점</ListTitle>
                <ListData>{detailMovieData.vote_average.toFixed(1)}</ListData>
              </DetailDataItems>
              <DetailDataItems>
                <ListTitle>구매</ListTitle>
                <ListDataWrapper>
                  {krValue?.buy !== undefined ? (
                    krValue?.buy.map((item, index) => (
                      <>
                        <WatchProviderLogo
                          src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                          alt=""
                          key={index}
                        />
                        <ListData margin="4px">{item.provider_name}</ListData>
                      </>
                    ))
                  ) : (
                    <ListData>-</ListData>
                  )}
                </ListDataWrapper>
              </DetailDataItems>
              <DetailDataItems>
                <ListTitle>대여</ListTitle>
                <ListDataWrapper>
                  {krValue?.rent !== undefined ? (
                    krValue?.rent.map((item, index) => (
                      <>
                        <WatchProviderLogo
                          src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                          alt=""
                          key={index}
                        />
                        <ListData margin="4px">{item.provider_name}</ListData>
                      </>
                    ))
                  ) : (
                    <ListData>-</ListData>
                  )}
                </ListDataWrapper>
              </DetailDataItems>
              <DetailDataItems>
                <ListTitle>OTT</ListTitle>
                <ListDataWrapper>
                  {krValue?.flatrate !== undefined ? (
                    krValue?.flatrate.map((item, index) => (
                      <>
                        <WatchProviderLogo
                          src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                          alt=""
                          key={index}
                        />
                        <ListData margin="4px">{item.provider_name}</ListData>
                      </>
                    ))
                  ) : (
                    <ListData>-</ListData>
                  )}
                </ListDataWrapper>
              </DetailDataItems>
            </DetailData>
          </ContainerSection>
        </DetailPageLayout>
      </motion.div>
    )
  }
}

export default MovieDetail

export const DetailPageLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 100px;
`

export const ContainerSection = styled(motion.section)<ContainerSectionProps>`
  margin: ${({ margin }) => (margin ? margin : '12px 6%')};
  width: 90%;
  height: fit-content;
`
export const Tagline = styled.p`
  margin: 20px 48px;
  background-color: #aaeec4;
  width: fit-content;
  padding: 0 10px;
  color: #444;
  font-weight: 400;
`

export const ContentsImage = styled.img`
  aspect-ratio: 3/4;
  height: 860px;
`
export const OverviewBox = styled.div`
  height: fit-content;
  margin-bottom: 60px;
  line-height: 150%;
  width: 90%;
`

export const DetailData = styled.dl`
  list-style: none;
  margin: 0;
  padding: 0;
`
export const DetailDataItems = styled.div`
  border-top: 1px solid #707070;
  width: 90%;
  padding: 16px 4px;
  display: flex;
  justify-content: space-between;
`
export const WatchProviderLogo = styled.img`
  /* width: 5%; */
  width: 26px;
  object-fit: scale-down;
  margin-left: 12px;
`
export const ListDataWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: fit-content;
`

export const ListTitle = styled.dt`
  font-weight: 200;
  color: #444;
`
export const ListData = styled.dd<ListDataProps>`
  font-weight: 400;
  color: #13cd86;
  margin-left: 12px;
  margin-left: ${({ margin }) => (margin ? margin : '12px')};
`
