 
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
     <Header></Header>
     <div className='flex w-10/12 mx-auto mt-12'>
      <Courses></Courses>
      <Bookmarks></Bookmarks>
     </div>
    </>
  )
}

export default App
