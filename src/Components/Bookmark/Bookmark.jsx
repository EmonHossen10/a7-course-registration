const Bookmark = ({ bookmark ,i }) => {
  const { title } = bookmark;
  console.log(bookmark,i)
  return (
    <div>
      {/* <ul className="list-decimal ml-5">
        <li>{title}</li>
      </ul> */}
       
        <span className="font-bold">{i+1}. </span> {title}
       
    </div>
  );
};

export default Bookmark;
