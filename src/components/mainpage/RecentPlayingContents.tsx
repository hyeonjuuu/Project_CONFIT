import { useTrendingTVDataStore } from '@/store/useTrendingTVDataStore'
import styled from 'styled-components'
import VerticalLinesExample from './VerticalLinesExample'

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
      <VerticalLinesExample />
    </>
  )
}

export default RecentPlayingContents

const RecentContentsWrapper = styled.div`
  /* background-color: white; */
  /* background-color: transparent; */
  position: absolute;
  /* overflow: hidden; */
`

const ContentsWrapper = styled.div`
  padding: 0 50px;
  position: relative;
  z-index: 1;
  margin: 32px 0;
`

const LargeContentsBox = styled.div`
  display: flex;
  gap: 28px;
  margin: 48px 0;
  align-items: center;
  /* background-color: teal; */
`

const ContentsItemBox = styled.div`
  display: flex;
  flex-direction: column;
`

const SmallContentsBox = styled(LargeContentsBox)`
  justify-content: flex-end;
`

const LargeImg = styled.img`
  /* width: 500px; */
  width: ${({ width }) => width};
  object-fit: contain;
  border-radius: 10px;
  height: 100%;
  /* max-width: 100%; */
`

const SmallImg = styled.img`
  /* aspect-ratio: 16/9; */
  /* border: 5px solid #cbcbcb; */
  width: 600px;
  /* width: 300px; */
  height: 100%;
  /* width: ${({ width }) => width}; */
  object-fit: cover;
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
