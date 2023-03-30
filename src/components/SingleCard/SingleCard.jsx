import React from 'react';

const SingleCard = (props) => {
    console.log(props.data)
    const {id, author_image,cover_image,author_name,published,read_time,title} = props.data;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl mb-10">
                <figure><img src={cover_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
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