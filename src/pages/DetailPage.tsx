import { getMovieDetailData, getTvDetailData } from '@/api/getDetailData'
import getWatchProviders from '@/api/getWatchProviders'
import SectionTitle from '@/components/SectionTitle'
import { useDetailDataStore } from '@/store/useDetailDataStore'
import { ContentsWatchProviderItem } from '@/types/mainPage/bestContents'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useSpring
} from 'framer-motion'

interface ContainerSectionProps {
  margin?: string
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function DetailPage() {
  let { id: detailId } = useParams()
  let { type: detailType } = useParams()
  const detailContentsId = parseInt(detailId || '0')
  const { detailTVData, setDetailTVData, detailMovieData, setDetailMovieData } =
    useDetailDataStore()
  const [contentsWatchProvider, setContentsWatchProvider] =
    useState<ContentsWatchProviderItem>()

  console.log(detailId)
  console.log(detailType)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (detailType === 'tv') {
      const TvContentsDetailData = async () => {
        const data = await getTvDetailData(detailContentsId)
        setDetailTVData(data)
        console.log('tv', data)
      }

      TvContentsDetailData()
    } else {
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
    }
  }, [])

  const ref = useRef(null)
  // const { scrollYProgress } = useScroll({ target: ref })
  const { scrollYProgress, scrollY } = useScroll({
    target: ref
  })
  const y = useParallax(scrollYProgress, -200)
  // const y = useParallax(scrollY, 200)

  const { scrollXProgress } = useScroll()
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const krValue = contentsWatchProvider?.results.KR
  console.log('krvalue', krValue?.buy)

  if (detailMovieData && detailType === 'movie') {
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
  } else {
    return (
      <>
        <div>
          <SectionTitle
            textfirst={detailTVData?.original_name}
            padding="60px 0 0 0"
          />
        </div>
        <DetailPageLayout>
          <ContainerSection>
            <ContentsImage
              src={`https://image.tmdb.org/t/p/original/${detailTVData?.poster_path}`}
              alt={`${detailTVData?.name} 포스터`}
            />
          </ContainerSection>
          <ContainerSection
            margin="auto"
            className="progress"
            // style={{ y }}
            ref={ref}
          >
            <OverviewBox>
              <p>{detailTVData?.overview}</p>
            </OverviewBox>
            <DetailData>
              <DetailDataItems>
                <span>Title</span>
                <span>{detailTVData?.name}</span>
              </DetailDataItems>
              <DetailDataItems>
                <span>First Air Date</span>
                <span>{detailTVData?.first_air_date}</span>
              </DetailDataItems>
              <DetailDataItems>
                <span>Genres</span>
                {detailTVData?.genres.map(item => <span>{item.name}</span>)}
              </DetailDataItems>
              <DetailDataItems>
                <span>Homepage</span>

                <a
                  href={detailTVData?.homepage}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span>{`${detailTVData?.original_name} 페이지`}</span>
                </a>
              </DetailDataItems>
              <DetailDataItems>
                <span>Buy to Watch</span>
                {detailTVData?.networks.map(item => (
                  <>
                    <WatchProviderLogo
                      src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                      alt=""
                    />
                    <span>{item.name}</span>
                  </>
                ))}
              </DetailDataItems>
              {/* <DetailDataItems>
                <span>Rent to Watch</span>
                {krValue?.rent.map(item => (
                  <>
                    <WatchProviderLogo
                      src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                      alt=""
                    />
                    <span>{item.provider_name}</span>
                  </>
                ))}
              </DetailDataItems> */}
            </DetailData>
          </ContainerSection>
        </DetailPageLayout>
      </>
    )
  }
}

export default DetailPage

// const DetailPageLayout = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   margin-bottom: 100px;
// `

const DetailPageLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 100px;
`

// const ContainerSection = styled.section<ContainerSectionProps>`
//   /* margin: 12px 6%; */
//   margin: ${({ margin }) => (margin ? margin : '12px 6%')};
// `
const ContainerSection = styled(motion.section)<ContainerSectionProps>`
  /* margin: 12px 6%; */
  margin: ${({ margin }) => (margin ? margin : '12px 6%')};
  width: 90%;
  height: fit-content;
  /* width: fit-content; */
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
  border-top: 1px solid red;
  width: 90%;
  padding: 16px 4px;
  display: flex;
  justify-content: space-between;
`
const WatchProviderLogo = styled.img`
  width: 5%;
  object-fit: scale-down;
`
