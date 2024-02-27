import { useScroll, useTransform, MotionValue, useSpring } from 'framer-motion'
import {
  ContainerSection,
  ContentsImage,
  DetailData,
  DetailDataItems,
  DetailPageLayout,
  ListData,
  ListDataWrapper,
  ListTitle,
  OverviewBox,
  Tagline,
  WatchProviderLogo
} from './MovieDetail'
import { useParams } from 'react-router-dom'
import { useDetailDataStore } from '@/store/useDetailDataStore'
import React, { useEffect, useRef } from 'react'
import { getTvDetailData } from '@/api/getDetailData'
import ContentsTitle from '../ContentsTitle'

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function TVDetail() {
  let { id: detailId } = useParams()
  let { type: detailType } = useParams()
  const detailContentsId = parseInt(detailId || '0')
  const ref = useRef(null)
  const { detailTVData, setDetailTVData } = useDetailDataStore()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (detailType === 'tv') {
      const TvContentsDetailData = async () => {
        const data = await getTvDetailData(detailContentsId)
        setDetailTVData(data)
      }

      TvContentsDetailData()
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref
  })
  const y = useParallax(scrollYProgress, -150)
  const { scrollXProgress } = useScroll()
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  if (detailTVData && detailType === 'tv') {
    return (
      <>
        <div>
          {detailTVData.original_language !== 'kr' &&
          detailTVData.original_language !== 'en' ? (
            <ContentsTitle
              textfirst={detailTVData?.name}
              padding="60px 0 0 0"
            />
          ) : (
            <ContentsTitle
              textfirst={detailTVData.original_name || detailTVData?.name}
              padding="60px 0 0 0"
            />
          )}
          <Tagline>{detailTVData?.tagline}</Tagline>
        </div>
        <DetailPageLayout>
          <ContainerSection>
            <ContentsImage
              src={`https://image.tmdb.org/t/p/original/${detailTVData?.poster_path}`}
              alt={`${detailTVData?.name} 포스터`}
            />
          </ContainerSection>
          <ContainerSection margin="auto" style={{ scaleX, y }} ref={ref}>
            <OverviewBox>
              <p>{detailTVData?.overview}</p>
            </OverviewBox>
            <DetailData>
              <DetailDataItems>
                <ListTitle>타이틀</ListTitle>
                <ListData>{detailTVData?.name}</ListData>
              </DetailDataItems>
              <DetailDataItems>
                <ListTitle>타입</ListTitle>
                <ListData>{detailTVData?.type}</ListData>
              </DetailDataItems>
              <DetailDataItems>
                <ListTitle>첫방송</ListTitle>
                <ListData>{detailTVData?.first_air_date}</ListData>
              </DetailDataItems>

              <DetailDataItems>
                <ListTitle>최근 방송</ListTitle>
                <ListData>{detailTVData?.last_air_date}</ListData>
              </DetailDataItems>
              <DetailDataItems>
                <ListTitle>장르</ListTitle>
                <ListDataWrapper>
                  {detailTVData?.genres.map(item => (
                    <ListData key={item.id}>{item.name}</ListData>
                  ))}
                </ListDataWrapper>
              </DetailDataItems>
              <DetailDataItems>
                <ListTitle>평점</ListTitle>
                <ListData>{(detailTVData?.vote_average).toFixed(1)}</ListData>
              </DetailDataItems>
              <DetailDataItems>
                <ListTitle>홈페이지</ListTitle>

                <a
                  href={detailTVData?.homepage}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <ListData>{`${detailTVData?.original_name} 페이지`}</ListData>
                </a>
              </DetailDataItems>
              <DetailDataItems>
                <ListTitle>OTT</ListTitle>
                <ListDataWrapper>
                  {detailTVData?.networks.map(item => (
                    <React.Fragment key={item.id}>
                      <WatchProviderLogo
                        src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                        alt=""
                      />
                      <ListData>{item.name}</ListData>
                    </React.Fragment>
                  ))}
                </ListDataWrapper>
              </DetailDataItems>
            </DetailData>
          </ContainerSection>
        </DetailPageLayout>
      </>
    )
  }
}

export default TVDetail
