import { usePlayingMovieStore } from '@/store/usePlayingMovieStore'
import { movieGenres, tvGenres } from '@/utils/genresData'
import { Key, useEffect, useState } from 'react'
import styled from 'styled-components'
import { RenderDataItems } from '@/types/mainPage/ContentsData'
import { useTrendingTVDataStore } from '@/store/useTrendingTVDataStore'
import { supabase } from '@/supabase/supabase'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css'

SwiperCore.use([Navigation])

interface DiscoverContentsBoxProps {
  justifycontent: string
  borderbottom?: string
  bordertop?: string
  padding?: string
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
      const { data, error } = await supabase.from('reviews').select()

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
            >
              <ReviewContentsTitle>
                {item.contents_data.title || item.contents_data.name}
              </ReviewContentsTitle>
              <div>
                <span>{item.user_email.split('@')[0]}</span>
                <ReviewDate>{item.created_at.slice(0, 10)}</ReviewDate>
              </div>
            </ReviewContentsBox>
            <ReviewImageContainer>
              {item.user_image && item.user_image[0] !== null ? (
                // item.user_image.map((image: string | undefined) => (
                //   <Swiper navigation={true} modules={[Navigation]}>
                //     <SwiperSlide>
                //       <ReviewUserImage src={image} alt="" />
                //     </SwiperSlide>
                //   </Swiper>
                // ))
                /* -------------------------------------------------------------------------- */
                // <SwiperWrapper navigation={true} modules={[Navigation]}>
                //   {item.user_image.map(
                //     (image: string | undefined, index: number) => (
                //       <SwiperSlideContainer key={index}>
                //         <ReviewUserImage src={image} alt="" />
                //       </SwiperSlideContainer>
                //     )
                //   )}
                // </SwiperWrapper>
                /* -------------------------------------------------------------------------- */
                <SwiperWrapper
                  navigation={true}
                  modules={[Navigation]}
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
              <ReviewContentsGenreBox>
                {/* {item?.genre_ids
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
                    })} */}
              </ReviewContentsGenreBox>
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
  align-items: center;
  align-content: center;
`

const ReviewContentsSideBox = styled(ReviewContentsBox)`
  flex-direction: column;
  gap: 8px;
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

const ReviewContentsGenreBox = styled.div`
  display: flex;
  justify-self: self-end;
`

const ReviewContentsGenre = styled.span`
  padding: 6px 14px;
  border: 1px solid #444;
  color: #444;
  border-radius: 42px;
  margin: 0 4px;
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
  .swiper-button-prev,
  .swiper-button-next {
    color: #13cd86;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 26px;
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
