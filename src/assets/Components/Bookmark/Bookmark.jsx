const Bookmark = ({ bookmark }) => {
  return (
    <div>
      <div className="">
            
            <div className="px-5 py-7 my-4 rounded-md bg-white">
                <h2 className="text-lg font-semibold ">{bookmark.title}</h2>
            </div>

      </div>
    </div>
  );
};

export default Bookmark;
