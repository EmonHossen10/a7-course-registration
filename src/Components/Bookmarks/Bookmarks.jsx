import Bookmark from "../Bookmark/Bookmark";

import "./Bookmarks.css";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="w-1/3">
      <div className="bg-slate-100 p-3 rounded-lg ">
        <h2>This is Bookmarks : {bookmarks.length}</h2>

        <div>
          <h2 className="text-2xl font-bold mb-3">Course Name </h2>
          {bookmarks.map((bookmark, i) => (
            <Bookmark key={i} bookmark={bookmark}></Bookmark>
          ))}
          <hr className="my-3 horizontal-line" />
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
