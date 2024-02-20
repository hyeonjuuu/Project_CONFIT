import { usePlayingMovieStore } from '@/store/usePlayingMovieStore'
import { movieGenres, tvGenres } from '@/utils/genresData'
import { Key, useEffect, useState } from 'react'
import styled from 'styled-components'
import { RenderDataItems } from '@/types/mainPage/ContentsData'
import { useTrendingTVDataStore } from '@/store/useTrendingTVDataStore'
import { supabase } from '@/supabase/supabase'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css'
import 'swiper/css/pagination'

SwiperCore.use([Pagination])

interface DiscoverContentsBoxProps {
  justifycontent: string
  borderbottom?: string
  bordertop?: string
  padding?: string
  alignitems?: string
}

interface ReviewContentsProps {
  date?: string
}

function ReviewContents({ date }: ReviewContentsProps) {
  const { playingMovieData } = usePlayingMovieStore()
  const { trendingTVData } = useTrendingTVDataStore()
  const [renderData, setRenderData] = useState<RenderDataItems[] | undefined>()
  const [hover, setHover] = useState(false)
  const [reviewData, setReviewData] = useState<any[] | null>()

  useEffect(() => {
    if (date === '개봉일 : ') {
      setRenderData(playingMovieData)
    } else {
      setRenderData(trendingTVData)
    }
  }, [])

  useEffect(() => {
    const fetchingReviewData = async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select()
        .order('created_at', { ascending: false })

      console.log(data)
      setReviewData(data)
    }

    fetchingReviewData()
  }, [])

  const handleHover = () => {
    setHover(true)
  }

  return (
    <>
      <ReviewContentsSection>
        {reviewData?.map(item => (
          <ReviewContentsWrapper key={item.id}>
            {/* <ReviewContentsLink href=""> */}
            <ReviewContentsBox
              justifycontent="center"
              borderbottom="1px solid #cbcbcb"
              alignitems="center"
            >
              <ReviewContentsTitle>
                {item.contents_data.title || item.contents_data.name}
              </ReviewContentsTitle>
              <ReviewUserBox>
                <UserCircleDiv></UserCircleDiv>
                <ReviewUser>{item.user_email.split('@')[0]}</ReviewUser>
              </ReviewUserBox>
            </ReviewContentsBox>
            <ReviewImageContainer>
              {item.user_image &&
              item.user_image[0] !== null &&
              item.user_image.length !== 0 ? (
                <SwiperWrapper
                  pagination={true}
                  modules={[Pagination]}
                  // slidesPerView={1}
                  // spaceBetween={30}
                  centeredSlides={true}
                >
                  {item.user_image.map(
                    (image: string | undefined, index: number) => (
                      <SwiperSlideContainer>
                        <ReviewUserImage src={image} alt="" />
                      </SwiperSlideContainer>
                    )
                  )}
                </SwiperWrapper>
              ) : (
                <ReviewContentImage
                  src={`https://image.tmdb.org/t/p/original/${item.contents_data.poster_path || item.contents_data.backdrop_path}`}
                  alt=""
                />
              )}
            </ReviewImageContainer>
            <ReviewContentsSideBox
              justifycontent="flex-start"
              bordertop="1px solid #cbcbcb"
              padding="12px"
            >
              <ReviewContentsSubstance>
                {item.review_data}
              </ReviewContentsSubstance>
              <ReviewContentsContainer>
                <ReviewContentsGenreBox>
                  {item?.contents_data.genre_ids
                    .slice(0, 3)
                    .map((id: number, index: number) => {
                      const genre =
                        (movieGenres.genres || []).find(
                          genre => genre.id === id
                        ) ||
                        (tvGenres.genres || []).find(genre => genre.id === id)
                      return (
                        <ReviewContentsGenre key={index}>
                          {genre?.name}
                        </ReviewContentsGenre>
                      )
                    })}
                </ReviewContentsGenreBox>
                <ReviewDate>{item.created_at.slice(0, 10)}</ReviewDate>
              </ReviewContentsContainer>
            </ReviewContentsSideBox>
            {/* </ReviewContentsLink> */}
          </ReviewContentsWrapper>
        ))}
      </ReviewContentsSection>
    </>
  )
}

export default ReviewContents

const ReviewContentsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid #cdcdcd;
`
const ReviewContentsWrapper = styled.div`
  border: 1px solid #cbcbcb;
  /* padding: 25px; */
  min-width: 360px;
`

const ReviewContentsLink = styled.a`
  /* gap: 25px; */
  display: grid;
  grid-template-rows: 150px 1fr 100px;
  height: 100%;
  position: relative;
  &:hover {
    background-color: #f8f8f8;
    transition: 1s ease;
  }
`

const ReviewContentsBox = styled.div<DiscoverContentsBoxProps>`
  /* border-bottom: 1px solid #cbcbcb; */
  border-bottom: ${({ borderbottom }) => borderbottom};
  border-top: ${({ bordertop }) => bordertop};
  display: flex;
  justify-content: ${({ justifycontent }) => justifycontent};
  padding: ${({ padding }) => padding};
  flex-direction: column;
  /* align-items: center; */
  align-items: ${({ alignitems }) => alignitems};
  /* align-content: center; */
`

const ReviewContentsSideBox = styled(ReviewContentsBox)`
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
`

const ReviewContentsTitle = styled.span`
  font-size: 26px;
  color: #444444;
  font-weight: 700;
  /* align-self: self-end; */
  margin: 30px 10px;
  text-align: center;
`
const ReviewImageContainer = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
`

const ReviewUserImage = styled.img`
  object-fit: cover;
  margin: auto;
  /* max-width: 360px; */
  max-height: 500px;
  padding: 12px;
  box-sizing: border-box;
`

const ReviewContentImage = styled.img`
  /* padding: 25px; */
  padding: 12px;
  box-sizing: border-box;
  width: 100%;
  object-fit: scale-down;
  height: 100%;
`
const ReviewContentsSubstance = styled.span`
  /* margin: 4px 0; */
  /* padding: 0 10px; */
  color: #323232;
  font-size: 14px;
`

const ReviewContentsContainer = styled.div`
  display: flex;
  justify-self: self-end;
  align-items: center;
  justify-content: space-between;
`

const ReviewContentsGenreBox = styled.div`
  display: flex;
  gap: 4px;
`

const ReviewContentsGenre = styled.span`
  padding: 2px 6px;
  border: 1px solid #adadad;
  color: #707070;
  border-radius: 42px;
  font-size: 12px;
`

const ReviewDate = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: #707070;
`
const SwiperWrapper = styled(Swiper)`
  position: relative;
  width: 100%;
  display: flex;
  height: 100%;
  overflow: hidden;
  .swiper-wrapper {
    display: flex;
    height: 500px;
  }

  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 12px;
  }
  .swiper-pagination-bullet-active {
    background-color: #aaeec4;
  }
`
const SwiperSlideContainer = styled(SwiperSlide)`
  & > img {
    display: block;
    height: 100%;
    object-fit: cover;
    max-width: 100%;
  }
`
const ReviewUserBox = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 4px;
  margin: 12px 0;
`

export const UserCircleDiv = styled.div`
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: #aaeec4;
  display: flex;
  align-self: center;
`
const ReviewUser = styled.span`
  text-align: center;
`
