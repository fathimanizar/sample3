

import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import img1 from '../images/flower.jpeg';

const Home = () => {
    var [users,setUsers]=useState([]);
  

        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
        setUsers(response.data)
        })
  



  
       

               


   
  return (
    <div>
   
        <table border="1">
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
           
            {users.map((value,index)=>{
                return(
                    <tr>
                <td>{value.name}</td>
                <td>{value.username}</td>
                <td>{value.email}</td>
                </tr>
                )
            })}
          
            
        </table>
    </div>
  )
}

export default Home