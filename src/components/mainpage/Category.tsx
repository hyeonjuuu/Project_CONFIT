import { CircleProps, FontProps } from '@/types/mainPage/category'
import { dramaCategories, movieCategories } from '@/utils/mainCategory'
import styled from 'styled-components'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

function Category() {
  return (
    <CategorySection>
      <SwiperWrapper
        slidesPerView={5}
        spaceBetween={2}
        modules={[FreeMode]}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
          reverseDirection: true
        }}
        speed={3000}
        loop={true}
        centeredSlides={false}
      >
        {movieCategories.map(
          ({ colortop, colorbottom, text, textcolor }, index) => (
            <SwiperSlideWrapper key={index} style={{ width: 'auto' }}>
              <button>
                <CategoryCircle colortop={colortop} colorbottom={colorbottom}>
                  <CategroyList textcolor={textcolor}>{text}</CategroyList>
                </CategoryCircle>
              </button>
            </SwiperSlideWrapper>
          )
        )}
      </SwiperWrapper>
      <SwiperWrapper
        slidesPerView={5}
        spaceBetween={2}
        modules={[FreeMode]}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
        speed={3000}
        loop={true}
        centeredSlides={false}
      >
        {dramaCategories.map(
          ({ colortop, colorbottom, text, textcolor }, index) => (
            <SwiperSlideWrapper key={index} style={{ width: 'auto' }}>
              <button>
                <CategoryCircle colortop={colortop} colorbottom={colorbottom}>
                  <CategroyList textcolor={textcolor}>{text}</CategroyList>
                </CategoryCircle>
              </button>
            </SwiperSlideWrapper>
          )
        )}
      </SwiperWrapper>
    </CategorySection>
  )
}

export default Category

const CategorySection = styled.section`
  background-color: #edece8;
  padding: 60px 0;
  border-bottom: 1px solid #cbcbcb;
  border-top: 1px solid #cbcbcb;
`
export const SwiperWrapper = styled(Swiper)`
  display: flex;
  flex-direction: column;
  margin: 0 6px;
  transition-timing-function: linear;
  -o-transition-timing-function: linear;
  -moz-transition-timing-function: linear;
  :hover {
    transition-timing-function: none;
    -o-transition-timing-function: none;
    -moz-transition-timing-function: none;
  }
  &.swiper {
    .swiper-wrapper {
      transition-timing-function: linear;
      :hover {
        transition-timing-function: none;
      }
    }
  }
`
export const SwiperSlideWrapper = styled(SwiperSlide)`
  display: flex;
  flex-direction: row;
  margin: 10px 0 15px;
  position: relative;
  transition-timing-function: linear;
  -o-transition-timing-function: linear;
  -moz-transition-timing-function: linear;
  :hover {
    transition-timing-function: none;
    -o-transition-timing-function: none;
    -moz-transition-timing-function: none;
  }
`

const CategroyList = styled.span<FontProps>`
  text-align: center;
  /* color: ${({ $darkMode }) => ($darkMode ? '#FFFFFF' : '#444444')}; */
  color: ${({ textcolor }) => (textcolor ? '#ffffff' : '#222222')};
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 2 px;
`

const CategoryCircle = styled.div<CircleProps>`
  height: 100px;
  width: 280px;
  border-radius: 500px;
  background: ${({ colortop = '#222', colorbottom = '#222' }) =>
    `linear-gradient(${colortop}, ${colorbottom})`};
  align-self: center;
  margin-bottom: 4px;
  margin: 4px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`
