import { useState } from "react";
import "./App.css";
import Blogs from "./assets/Components/Blogs.jsc/Blogs";
import Bookmarks from "./assets/Components/Bookmarks/Bookmarks";
import Header from "./assets/Components/Header/Header";

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = (blog) =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleAddReadingTime = (time) =>{
    // console.log("time added");
    const newTime = readingTime + time
    setReadingTime(newTime)
      

  }

  return (
    <div className="md:w-[80%] mx-auto">
      <Header></Header>

      <div className="md:flex gap-8 p-5">
        <Blogs  
        
        handleAddReadingTime={handleAddReadingTime}
        handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
