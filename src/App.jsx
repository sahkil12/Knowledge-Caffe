import "./App.css";
import Blogs from "./assets/Components/Blogs.jsc/Blogs";
import Bookmarks from "./assets/Components/Bookmarks/Bookmarks";
import Header from "./assets/Components/Header/Header";

function App() {
  return (
    <div className="md:w-[80%] mx-auto">
      <Header></Header>

      <div className="md:flex gap-8 p-5">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  );
}

export default App;
