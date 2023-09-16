import { useState } from "react";
import "./App.css";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddBookmarks = (name) => {
    console.log( bookmarks)
    const isExist = bookmarks.find((item) => item.id == name.id);
    console.log(isExist);
    if (isExist) {
      toast.success('Already added in the bookmark');
    } else {
      const newBookmarks = [...bookmarks, name];
      setBookmarks(newBookmarks);
    }
  };
  return (
    <>
      <Header></Header>
      <div className="flex w-11/12	gap-5 mx-auto mt-12">
        <Courses handleAddBookmarks={handleAddBookmarks}></Courses>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
