import { useState } from 'react'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import searchImages from '../api'

function App() {
  const [images, setImages] = useState([])
  
  const onSubmitHandler = async (term) => {
    const result = await searchImages(term)
    setImages(result)
  }

  return (
    <>
      <SearchBar onSubmit={onSubmitHandler} />
      <ImageList images={images} />
    </>
  )
}

export default App
