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
import { useRef, useState } from 'react'
import { ContentsWatchProviderItem } from '@/types/mainPage/bestContents'

interface ContainerSectionProps {
  margin?: string
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function MovieDetail() {
  const { detailMovieData, setDetailMovieData } = useDetailDataStore()
  const [contentsWatchProvider, setContentsWatchProvider] =
    useState<ContentsWatchProviderItem>()

  const ref = useRef(null)

  const { scrollYProgress, scrollY } = useScroll({
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <SectionTitle
          textfirst={detailMovieData?.original_title}
          padding="60px 0 0 0"
        />
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
              <span>Title</span>
              <span>{detailMovieData?.title}</span>
            </DetailDataItems>
            <DetailDataItems>
              <span>Release Date</span>
              <span>{detailMovieData?.release_date}</span>
            </DetailDataItems>
            <DetailDataItems>
              <span>Genres</span>
              {detailMovieData?.genres.map(item => <span>{item.name}</span>)}
            </DetailDataItems>
            <DetailDataItems>
              <span>RunTime</span>
              <span>
                {`${Math.floor(detailMovieData?.runtime / 60)}시간 ${detailMovieData?.runtime % 60}분`}
              </span>
            </DetailDataItems>
            <DetailDataItems>
              <span>Buy to Watch</span>
              {krValue?.buy !== undefined ? (
                krValue?.buy.map(item => (
                  <>
                    <WatchProviderLogo
                      src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                      alt=""
                    />
                    <span>{item.provider_name}</span>
                  </>
                ))
              ) : (
                <span>-</span>
              )}
            </DetailDataItems>
            <DetailDataItems>
              <span>Rent to Watch</span>
              {krValue?.rent !== undefined ? (
                krValue?.rent.map(item => (
                  <>
                    <WatchProviderLogo
                      src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                      alt=""
                    />
                    <span>{item.provider_name}</span>
                  </>
                ))
              ) : (
                <span>-</span>
              )}
            </DetailDataItems>
            <DetailDataItems>
              <span>OTT</span>
              {krValue?.flatrate !== undefined ? (
                krValue?.flatrate.map(item => (
                  <>
                    <WatchProviderLogo
                      src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                      alt=""
                    />
                    <span>{item.provider_name}</span>
                  </>
                ))
              ) : (
                <span>-</span>
              )}
            </DetailDataItems>
          </DetailData>
        </ContainerSection>
      </DetailPageLayout>
    </motion.div>
  )
}

export default MovieDetail

const DetailPageLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 100px;
`

const ContainerSection = styled(motion.section)<ContainerSectionProps>`
  margin: ${({ margin }) => (margin ? margin : '12px 6%')};
  width: 90%;
  height: fit-content;
`

const ContentsImage = styled.img`
  /* width: 670px; */
  aspect-ratio: 3/4;
  height: 860px;
`
const OverviewBox = styled.div`
  height: fit-content;
  margin-bottom: 60px;
  line-height: 150%;
  width: 90%;
`

const DetailData = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const DetailDataItems = styled.li`
  border-top: 1px solid #707070;
  width: 90%;
  padding: 16px 4px;
  display: flex;
  justify-content: space-between;
`
const WatchProviderLogo = styled.img`
  width: 5%;
  object-fit: scale-down;
`
const ListTitle = styled.span`
  font-weight: 200;
`
