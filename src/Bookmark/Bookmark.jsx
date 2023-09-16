
const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div>
            <ol>
                <li>{title}</li>
            </ol>
        </div>
    );
};

export default Bookmark;