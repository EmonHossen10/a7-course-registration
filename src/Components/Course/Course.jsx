import { FiBookmark } from 'react-icons/fi';
const Course = ({course}) => {
    const {image,title,description,price,credit}=course
    return (
         <>
            <div className="card    bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="p-5">
    <h2 className="card-title font-bold">{title}</h2>
    <p className='my-3 '>{description}</p>

    <div className='flex justify-between items-center my-5 text-xs '>
        <span> $ Price : {price} </span>
        <span> <FiBookmark></FiBookmark> </span>
        <span> Credit  : {credit} hr </span>
    </div>
     
    <div className="card-actions ">
      <button className="btn btn-primary w-full">Select</button>
    </div>
  </div>
</div>
</>
        
    );
};

export default Course;