import "./App.css";
import Blogs from "./assets/Components/Blogs.jsc/Blogs";
import Bookmarks from "./assets/Components/Bookmarks/Bookmarks";
import Header from "./assets/Components/Header/Header";

function App() {
  return (
    <div className="w-[95%] mx-auto">
      <Header></Header>

      <div className="md:flex">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  );
}

export default App;
