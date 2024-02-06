import { getSearchData } from '@/api/getSearchData'
import { useEffect, useRef, useState } from 'react'

function ReviewWriting() {
  const [searchKeyword, setSearchKeyword] = useState('')
  const searchInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const Search = async () => {
      const data = await getSearchData()
      console.log(data)
    }
    Search()
  }, [searchKeyword])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget.value
    console.log(target)
    setSearchKeyword(target)
  }

  return (
    <div>
      <div>
        <form action="">
          <input type="text" ref={searchInput} onChange={handleSearch} />
        </form>
      </div>
    </div>
  )
}

export default ReviewWriting
