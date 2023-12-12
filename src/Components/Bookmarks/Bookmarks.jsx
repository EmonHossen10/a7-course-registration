import Bookmark from "../Bookmark/Bookmark";

import "./Bookmarks.css";

const Bookmarks = ({ bookmarks, totalCost, remaining }) => {
  return (
    <div className="w-1/3">
      <div className="bg-slate-100 p-3 rounded-lg ">
        <h2 className="credit">Credit Hour Remaining : {remaining} </h2>
        <hr className="my-3 horizontal-line" />

        {/* <h2>Credit   : {totalCost} </h2> */}

        <div>
          <h2 className="text-2xl font-bold mb-3">Course Name </h2>
          {bookmarks.map((bookmark, i) => (
            <Bookmark key={i} bookmark={bookmark} i={i} ></Bookmark>
          ))}
          <hr className="my-3 horizontal-line" />
        </div>

        <h2 className="total">Total Credit Hour : {totalCost}</h2>
      </div>
    </div>
  );
};

export default Bookmarks;
