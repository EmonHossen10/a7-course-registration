import { useState } from "react";
import "./App.css";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [remaining, setRemaining] = useState(0);

  const handleAddBookmarks = (name) => {
    console.log(bookmarks);
    const isExist = bookmarks.find((item) => item.id == name.id);
    // console.log(isExist);
    let count = name.credit;
    if (isExist) {
      return toast.success("Already added in the bookmark");
    } else {
      bookmarks.forEach((item) => {
        count = count + item.credit;
      });
      const totalRemaining = 20 - count;

      if(count >21){
        return toast.warning("Do not added course more than 20")
      }
      else{

        setTotalCost(count);
        setRemaining(totalRemaining);
        const newBookmarks = [...bookmarks, name];
        setBookmarks(newBookmarks);
      }
    }
  };
  return (
    <>
      <Header></Header>
      <div className="flex w-11/12	gap-5 mx-auto mt-12">
        <Courses handleAddBookmarks={handleAddBookmarks}></Courses>
        <Bookmarks 
        bookmarks={bookmarks}
        totalCost={totalCost}
        remaining={remaining}
        ></Bookmarks>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
