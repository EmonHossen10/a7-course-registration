const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div>
      <ol className="list-decimal ml-5">
        <li>{title}</li>
      </ol>
    </div>
  );
};

export default Bookmark;
