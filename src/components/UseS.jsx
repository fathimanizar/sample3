import React, { useEffect, useState } from 'react'

const UseS = () => {
    var [name,setName]=useState();
    const changeHome=()=>
    {  setName("Home");
    }
    const changeGallery=()=>
    {  setName("Gallery");
    }
    const changeContact=()=>
    {   setName("Contact");
    }
    useEffect(()=>{
        changeHome()
    },[])

    // useEffect(()=>{
    //     changeContact()
    // },[]);


  return (
    <div>
        <button onClick={changeHome}>Home</button>
        <button onClick={changeGallery}>Gallery</button>    
        <button onClick={changeContact}>Contact</button>
        <h4>Welcome to {name}</h4>


    </div>
  )
}

export default UseS