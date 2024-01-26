import { useTrendingTVDataStore } from '@/store/useTrendingTVDataStore'
import React from 'react'
import styled from 'styled-components'

function RecentPlayingContents() {
  const { trendingTVData } = useTrendingTVDataStore()
  console.log(trendingTVData)

  return (
    <>
      {trendingTVData
        ?.filter(item => item !== undefined)
        ?.map((item, index) => (
          <ContentsWrapper key={index}>
            {/* {index % 2 === 0 ? ( */}
            <LargeContentsBox>
              <LargeImg
                src={`https://image.tmdb.org/t/p/original/${trendingTVData[index * 4]?.poster_path}`}
                alt=""
                key={index * 4}
              />
              <LargeImg
                src={`https://image.tmdb.org/t/p/original/${trendingTVData[index * 4 + 1]?.poster_path}`}
                alt=""
                key={index * 4 + 1}
              />
            </LargeContentsBox>
            {/* ) : ( */}
            <LargeContentsBox>
              <SmallImg
                src={`https://image.tmdb.org/t/p/original/${trendingTVData[index * 4 + 2]?.backdrop_path}`}
                alt=""
                key={index * 4 + 2}
              />
              <SmallImg
                src={`https://image.tmdb.org/t/p/original/${trendingTVData[index * 4 + 3]?.backdrop_path}`}
                alt=""
                key={index * 4 + 3}
              />
            </LargeContentsBox>
            {/* )} */}
          </ContentsWrapper>
        ))}
      {trendingTVData
        ?.filter(item => item !== undefined)
        ?.map((item, index) => (
          <ContentsWrapper key={index}>
            {index * 4 < trendingTVData.length && (
              <LargeContentsBox>
                <LargeImg
                  src={`https://image.tmdb.org/t/p/original/${trendingTVData[index * 4]?.poster_path}`}
                  alt=""
                  key={index * 4}
                />
                {index * 4 + 1 < trendingTVData.length && (
                  <LargeImg
                    src={`https://image.tmdb.org/t/p/original/${trendingTVData[index * 4 + 1]?.poster_path}`}
                    alt=""
                    key={index * 4 + 1}
                  />
                )}
              </LargeContentsBox>
            )}
            {index * 4 + 2 < trendingTVData.length && (
              <SmallContentsBox>
                <SmallImg
                  src={`https://image.tmdb.org/t/p/original/${trendingTVData[index * 4 + 2]?.backdrop_path}`}
                  alt=""
                  key={index * 4 + 2}
                />
                {index * 4 + 3 < trendingTVData.length && (
                  <SmallImg
                    src={`https://image.tmdb.org/t/p/original/${trendingTVData[index * 4 + 3]?.backdrop_path}`}
                    alt=""
                    key={index * 4 + 3}
                  />
                )}
              </SmallContentsBox>
            )}
          </ContentsWrapper>
        ))}
    </>
  )
}

export default RecentPlayingContents

const ContentsWrapper = styled.div`
  background-color: #999999;
`

const LargeContentsBox = styled.div`
  display: flex;
`

const SmallContentsBox = styled(LargeContentsBox)`
  justify-content: flex-end;
  border: 5px solid red;
`

const LargeImg = styled.img`
  width: 500px;
`
const SmallImg = styled.img`
  aspect-ratio: 16/9;
  width: 300px;
`
