 
import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks,setBookmarks]=useState([])
  const handleAddBookmarks=name=>{
    console.log("here is name added",name)
    const newBookmarks=[...bookmarks,name]
    setBookmarks(newBookmarks)
  }
  return (
    <>
     <Header></Header>
     <div className='flex w-11/12	gap-5 mx-auto mt-12'>
      <Courses 
      handleAddBookmarks={handleAddBookmarks}
      ></Courses>
      <Bookmarks  bookmarks={bookmarks}></Bookmarks>
     </div>
    </>
  )
}

export default App
