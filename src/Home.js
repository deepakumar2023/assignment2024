import React, { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';
import { MdOutlineRemoveCircle } from "react-icons/md";

import Sidebar from "./Sidebar.js";

function Home() {
  const [isCardView,setlsCardView]= useState(true)
  const [isToggleView, setToggleView] = useState(false);


  const [isLoading,setIsLoading] =  useState(true);
  const [posts,setPosts] = useState([]);
  const [error,setError] = useState(null);
  
  useEffect (() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      setPosts (response.data);
      setIsLoading(false);
    })
    .catch(error => {
      setError(error);
      setIsLoading(false);
    });

  }, []);


  const removeCard = (postId) => {
    const updatedPosts = posts.filter (post => post.id !== postId);
    setPosts(updatedPosts);
  };

  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div>Error: {error.message}</div>;
  }
  
  const Showdata = (str,num) => {
    if(str?.length > num){
      return str.slice(0,num)+ '......'
    }
    else {
      return str;
    }
    
  }


  
const limitedPosts = posts.slice(0, 6);
  return (
     <>

   

    
     <div className=" flex bg-blue-100" >
     <div className="">
     <Sidebar 
     isCardView = {isCardView} 
     setlsCardView = {setlsCardView} 
    setToggleView={setToggleView}
     />

     </div>
      {isCardView? (
        <div className="card-container m-auto">
        
        {limitedPosts.map(post => (
          <div key={post.id} className="card">
            <div className="round-image">
            <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKy5BbZG_BuFvZ76iSsRyEhNtSvcLDKg8Siw&usqp=CAU${post.id}`}
            alt={`Image${post.id}`} 
            />
            </div>
            <div className="card-content">
            {Showdata(post.title,50)}
            <br/>
            {Showdata(post.body,50)}
            </div> 
            <button onClick={() => removeCard(post.id)} className="cancel-button text-red-600 font-bold text-lg">
           <MdOutlineRemoveCircle /> 
            </button> 
          </div>

        ))}
      </div>
      ): 
      
      (
        
        <div className="card-container m-auto">
        {limitedPosts.map(post => (
          <div key={post.id} className="card2">
            <div className="card-content2 ">
            <button onClick={() => removeCard(post.id)} className="cancel-button2 text-red-600 font-bold text-lg  ml-56" >X</button> 
           <div className="font-bold text-xl">

           {Showdata(post.title,20)}
           </div>
             <br/>
             <div className="text-base font-normal">
           {Showdata(post.body,40)}
           </div>
           
       </div> 
            <div className="object-cover h-32 w-65">
            <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKy5BbZG_BuFvZ76iSsRyEhNtSvcLDKg8Siw&usqp=CAU${post.id}`}alt={`Image${post.id}`} />
            </div>
            
          </div>

        ))}
      </div>
      )


      }
     
      </div>
    
     
     </>
  
  );
}
export default Home;