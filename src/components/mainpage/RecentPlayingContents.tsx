import { useTrendingTVDataStore } from '@/store/useTrendingTVDataStore'
import styled from 'styled-components'

function RecentPlayingContents() {
  const { trendingTVData } = useTrendingTVDataStore()
  console.log(trendingTVData)

  return (
    <>
      <RecentContentsWrapper>
        {trendingTVData
          ?.filter(item => item !== undefined)
          ?.map((item, index) => (
            <ContentsWrapper key={index}>
              {index * 4 < trendingTVData.length && (
                <LargeContentsBox>
                  <ContentsItemBox>
                    <LargeImg
                      src={`https://image.tmdb.org/t/p/original/${trendingTVData[index * 4]?.backdrop_path}`}
                      alt=""
                      key={index * 4}
                      width="720px"
                    />
                    <ContentsTextBox>
                      <ContentsTitle>
                        {trendingTVData[index * 4]?.name}
                      </ContentsTitle>
                      <ContentsDate>
                        {trendingTVData[index * 4].first_air_date.slice(0, 4)}
                      </ContentsDate>
                    </ContentsTextBox>
                  </ContentsItemBox>
                  {index * 4 + 1 < trendingTVData.length && (
                    <ContentsItemBox>
                      <LargeImg
                        src={`https://image.tmdb.org/t/p/original/${trendingTVData[index * 4 + 1]?.backdrop_path}`}
                        alt=""
                        key={index * 4 + 1}
                        width="720px"
                      />
                      <ContentsTextBox>
                        <ContentsTitle>
                          {trendingTVData[index * 4 + 1]?.name}
                        </ContentsTitle>
                        <ContentsDate>
                          {trendingTVData[index * 4 + 1].first_air_date.slice(
                            0,
                            4
                          )}
                        </ContentsDate>
                      </ContentsTextBox>
                    </ContentsItemBox>
                  )}
                </LargeContentsBox>
              )}
              {index * 4 + 2 < trendingTVData.length && (
                <SmallContentsBox>
                  <LargeImg
                    src={`https://image.tmdb.org/t/p/original/${trendingTVData[index * 4 + 2]?.poster_path}`}
                    alt=""
                    key={index * 4 + 2}
                    width="480"
                  />
                  {index * 4 + 3 < trendingTVData.length && (
                    <LargeImg
                      src={`https://image.tmdb.org/t/p/original/${trendingTVData[index * 4 + 3]?.poster_path}`}
                      alt=""
                      key={index * 4 + 3}
                      width="480"
                    />
                  )}
                </SmallContentsBox>
              )}
            </ContentsWrapper>
          ))}
      </RecentContentsWrapper>
    </>
  )
}

export default RecentPlayingContents

const RecentContentsWrapper = styled.div`
  background: repeating-linear-gradient(
      90deg,
      transparent,
      #edece8 1px,
      #edece8 200px
    ),
    linear-gradient(to bottom, #cbc9c9, #cbc9c9);
  padding: 20px 0;
`

const ContentsWrapper = styled.div`
  padding: 0 50px;
  z-index: 1;
  margin: 32px 0;
`

const LargeContentsBox = styled.div`
  display: flex;
  gap: 28px;
  margin: 48px 0;
  align-items: center;
`

const ContentsItemBox = styled.div`
  display: flex;
  flex-direction: column;
`

const SmallContentsBox = styled(LargeContentsBox)`
  justify-content: flex-end;
`

const LargeImg = styled.img`
  width: ${({ width }) => width};
  object-fit: contain;
  border-radius: 10px;
  height: 100%;
`

const ContentsTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 10px;
`

const ContentsTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
`
const ContentsDate = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  color: #707070;
`
