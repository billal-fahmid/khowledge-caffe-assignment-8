import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100  md:flex flex-col  md:flex-row sm:flex-col justify-between">
                <div className="">
                    <a className=" normal-case text-xl">Knowledge World</a>
                </div>

                <div className="flex gap-2 flex-col md:flex-row">

                    <ul className='mr-8 text-xl font-semibold gap-4 flex flex-col md:flex-row'>
                        <li ><a href="/home">Home</a></li>
                        <li><a href="/latest">Latests</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>

                    <div className="w-10 rounded-full mx-auto">
                        <img src="icon.png" />
                    </div>



                </div>
            </div>
            <hr />
        </div>
    );
};

export default Header;