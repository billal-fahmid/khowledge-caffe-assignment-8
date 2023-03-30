import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Knowledge World</a>
                </div>
                 <ul className='mr-8 text-xl font-semibold gap-4'>
                        <li ><a href="/home">Home</a></li>
                        <li><a href="/latest">Latests</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                <div className="flex gap-2">
                   
                    <div className="dropdown dropdown-end">
                        
                            <div className="w-10 rounded-full">
                                <img src="icon.png" />
                            </div>
                       
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;