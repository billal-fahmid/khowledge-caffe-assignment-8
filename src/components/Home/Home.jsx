import React, { useEffect, useState } from 'react';
import SideCard from '../SideCard/SideCard';
import SingleCard from '../SingleCard/SingleCard';

const Home = () => {
    const [datas, setDatas] = useState([]);
    const [readTime, setReadTime] = useState(0);
    console.log(readTime)
    useEffect(() =>{
        fetch('fake-data.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    },[])
    let previousReadTime =0;
   
    const handleReadTime = (time) =>{
        previousReadTime = readTime;
        if(!previousReadTime){

            previousReadTime= time;
            setReadTime(previousReadTime)
            
        }else{
           const newTotalTime = previousReadTime + time;
            setReadTime(newTotalTime)
        }
        
     
    }
  
    return (
        <div>
            <div className="main-container md:flex gap-5 mt-12">
                <div className="blogs w-[70%] ">
                    {
                        datas.map(data => <SingleCard data={data} handleReadTime={handleReadTime}></SingleCard>)
                    }
                </div>
                <div className="side-card w-[30%] ">
                    <SideCard readTime={readTime}></SideCard>
                </div>
            </div>
        </div>
    );
};

export default Home;