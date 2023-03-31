import React, { useEffect, useState } from 'react';
import SideCard from '../SideCard/SideCard';
import SingleCard from '../SingleCard/SingleCard';
import { ToastContainer, toast } from 'react-toastify';
import Questions from '../Questions/Questions';

const Home = () => {
    const [datas, setDatas] = useState([]);
    const [readTime, setReadTime] = useState(0);
    const [bookMarks, setBookMarks] = useState([])

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
    let previousBookMarks =[]
    const handleBookMarks =(title)=>{
        
        previousBookMarks = bookMarks;
        if(!previousBookMarks){
            previousBookMarks= title;
            setBookMarks(previousBookMarks)
        }else{
            const newBooksMarks =  [...previousBookMarks,title]
            setBookMarks(newBooksMarks)
        }
        bookMarks.find(titlee => {
            if(titlee=== title){
                toast("It's Again Added!");
            }
        })
        
    }
//   console.log(bookMarks)
    return (
        <div>
            <div className="main-container md:flex gap-5 mt-12">
                <div className="blogs md:w-[70%] ">
                    {
                        datas.map(data => <SingleCard data={data} handleReadTime={handleReadTime} handleBookMarks={handleBookMarks}></SingleCard>)
                    }
                    <Questions></Questions>
                </div>
                <div className="side-card md:w-[30%] sm:mb-40">
                    <SideCard readTime={readTime} bookMarks={bookMarks}></SideCard>
                </div>
            </div>
        </div>
        
    );
};

export default Home;