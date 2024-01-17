import BestContents from '@/components/mainpage/BestContents'
import Category from '@/components/mainpage/Category'
import Header from '@/layout/Header'
import { SwiperProps } from '@/types/mainPage/mainPage'
import styled from 'styled-components'
import { EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

function MainPage() {
  return (
    <MainWrapper>
      <MainPageTitle aria-label="메인페이지">메인 페이지</MainPageTitle>
      <PosterWrapper>
        <TitleContentsWrapper>
          <HeaderBox>
            <Header />
            <SubTitle>Find Your Contents Fit.</SubTitle>
          </HeaderBox>
          <TitleWrapper>
            <Title>CONFIT</Title>
            <CircleDiv></CircleDiv>
          </TitleWrapper>
        </TitleContentsWrapper>
        <SwiperWrapper
          slidesPerView={3.4}
          centeredSlides={true}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          freeMode={true}
          modules={[EffectCoverflow]}
          effect="fade"
          speed={1000}
          loopAdditionalSlides={3}
          loop={true}
        >
          <SwiperSlideContainer justifycontent="center">
            <TrendPosterImg src="" alt="" />
          </SwiperSlideContainer>
        </SwiperWrapper>
      </PosterWrapper>
      <BestContents />
      <Category />
    </MainWrapper>
  )
}

export default MainPage

const MainWrapper = styled.div`
  background-color: #edece8;
  /* height: 100vh; */
`

const MainPageTitle = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`

const TitleContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 36px;
`

const TitleWrapper = styled.div`
  display: flex;
`

const HeaderBox = styled(TitleWrapper)`
  flex-direction: row;
  justify-content: space-between;
`

const Title = styled.span`
  font-size: 108px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  display: inline-block;
  box-sizing: border-box;
  color: #222222;
`
const CircleDiv = styled.div`
  display: flex;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  align-self: flex-end;
  background-color: #aaeec4;
  margin: 0 0 20px 4px;
`

const SubTitle = styled(Title)`
  font-size: 56px;
  color: #999999;
  font-weight: 400;
  padding: 10px 0 0 0;
  font-weight: 200;
  order: -1;
`
const PosterWrapper = styled.section`
  padding: 20px 0 0 0;
`

const SwiperWrapper = styled(Swiper)`
  .swiper-slide-active {
    & > img {
      transition: filter;
      transition-delay: 1.5s ease;
      filter: grayscale(0) opacity(100);
      transform: scale(1.06);
      transition: 1s all ease;
    }
  }
`

const SwiperSlideContainer = styled(SwiperSlide)<SwiperProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ justifycontent }) => justifycontent};
  overflow: hidden;
  transition: 0.5s all ease;
  border-radius: 10px;
`

const TrendPosterImg = styled.img`
  width: 480px;
  height: 688px;
  border-radius: 10px;
  filter: grayscale(100%) opacity(70%);
  transition: 0.5s all ease;
  &:hover {
    transition: filter;
    transition: 1.2s all ease;
    transition-delay: 1s ease;
    filter: grayscale(0) opacity(100);
    transform: scale(1.06);
  }
`
