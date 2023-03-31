import React from 'react';

const SingleCard = (props) => {
    // console.log(props.data)
    const { id, author_image, cover_image, author_name, published, read_time, title } = props.data;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl mb-10">
                <figure><img src={cover_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <div className="">
                                <img className='w-10 h-10 rounded-full' src={author_image} />
                            </div>
                            <div className='ml-4 '>
                                <h2 className='text-[20px] font-semibold'>{author_name}</h2>
                                <p>{published}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <h3>{read_time} min Read
                            </h3>
                            <button onClick={() => props.handleBookMarks(title)} className='ml-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                                </svg>
                            </button>

                        </div>
                    </div>

                    <h2 className='text-2xl font-bold text-start'>
                        {title}
                    </h2>

                    <div className='text-start ml-0 pl-0'>
                        <button onClick={() => props.handleReadTime(read_time)} className="btn btn-active btn-link pl-0">Mark as read</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default SingleCard;