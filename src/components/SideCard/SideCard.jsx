import React from 'react';

const SideCard = ({ readTime }) => {
    return (
        <div className='sticky top-0'>
            <button className="btn gap-2 w-full">
            Spent time on read : 
                <div className="badge badge-secondary">{readTime} min</div>
            </button>

            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="card-title">Card title! {readTime}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideCard;