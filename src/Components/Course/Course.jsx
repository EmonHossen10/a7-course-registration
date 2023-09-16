import { FiBookmark } from 'react-icons/fi';
import './Course.css'
const Course = ({course,handleAddBookmarks}) => {
    const {image,title,description,price,credit}=course
    return (
         <>
            <div className="card    bg-base-100 shadow-xl">
  <figure><img className='p-2' src={image} alt="Shoes" /></figure>
  <div className="p-5">
    <h2 className="card-title font-bold">{title}</h2>
    <p className='my-3 '>{description}</p>

    <div className='flex justify-between items-center my-5 text-xs '>
        <span> $ Price : {price} </span>
        <span> <FiBookmark></FiBookmark> </span>
        <span> Credit  : {credit} hr </span>
    </div>
     
    <div className="card-actions ">
      <button onClick={()=>handleAddBookmarks(course)} className="button-primary w-full">Select</button>
    </div>
  </div>
</div>
</>
        
    );
};

export default Course;