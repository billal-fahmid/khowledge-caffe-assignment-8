import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Home = () => {
    const [datas, setDatas] = useState([]);
    // console.log(datas)
    useEffect(() =>{
        fetch('fake-data.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    },[])

    return (
        <div>
            <div className="main-container md:flex">
                <div className="blogs w-[70%] mt-12">
                    {
                        datas.map(data => <SingleCard data={data}></SingleCard>)
                    }
                </div>
                <div className="side-card w-[30%]">

                </div>
            </div>
        </div>
    );
};

export default Home;