import React from 'react';

const SingleCard = (props) => {
    console.log(props.data)
    const { id, author_image, cover_image, author_name, published, read_time, title } = props.data;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl mb-10">
                <figure><img src={cover_image} alt="Shoes" /></figure>
                <div className="card-body">

                    <h2 className="card-title gap-4">
                        <div className="w-10 h-10 rounded-full">
                            <img src={author_image} />
                        </div>
                       {author_name}
                    </h2>
                    <h2 className='text-2xl font-bold '>
                        {title}
                    </h2>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;