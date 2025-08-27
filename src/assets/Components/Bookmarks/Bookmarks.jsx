import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="flex-3 bg-gray-100 rounded-md">
            <div className="border-2 p-7 rounded-md bg-purple-50 border-purple-900">
                <h2 className="text-2xl font-bold text-purple-700">
                    Spent time on read : {readingTime} min</h2>
            </div>
          <div className="mt-10 p-6 rounded-md bg-gray-100">
              <h2 className='text-2xl font-bold'>Bookmarked Blogs : {bookmarks.length}</h2>
              {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
              }
          </div>
        </div>
    );
};

export default Bookmarks;