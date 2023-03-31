import React from 'react';

const SideCard = ({ readTime,bookMarks }) => {
    return (
        <div className='sticky top-0  '>
            <button className="btn gap-2 w-full mb-10">
            Spent time on read : 
                <div className="badge badge-secondary">{readTime} min</div>
            </button>

            <div className="card w-96 bg-base-100 shadow-xl ">
                <h2 className='card-title font-bold pb-5'>Bookmarked Blogs : {bookMarks.length}</h2>
                <div className="y">
                    {
                        bookMarks.map(bm => <h2 className="text-xl rounded-md mb-3 bg-gray-200 py-3 px-2">{bm}</h2>)
                    }
                   
                </div>
            </div>
        </div>
    );
};

export default SideCard;