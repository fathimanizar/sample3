import React, { useState } from 'react'

const Mapping = () => {
    var [data,setData]=useState(
        [{username:"manu",age:22},
         {username:"anu",age:23},
         {username:"vinu",age:24}
        ]                       )
  return (
    <div>
        <table>
        <tr>
                            <th>Name</th>
                            <th>Age</th>
        </tr>
          { 
            data.map((value,index)=>{
                  return(
                    <tr>
                      <td>{value.username}</td>
                      <td>{value.age}</td>
                    </tr>
                
                  )
            })
          }

        
            {/* {        data.map((value,index)=>{
                      return(
                       <tr>
                        <td >{value.username}</td>
                        <td>{value.age}</td>
                       </tr>
                      )
            })
            } */}
        </table>



     
    </div>
  )
}

export default Mapping