import React, { useState } from 'react'

const Mapping1 = () => {
    var [names,setNames]=useState(["aa","bb","cc"]);
  return (
    <div>


      <ul>

        {
          names.map((value,index)=>{
            return(
              <li>{value}</li>
            )
          })
        }
      </ul>
    
            {/* <ol>
               {
                 names.map((value,index)=>{
                         return(
                            <li>{value}</li>
                         )
                 })
               } 
            </ol> */}
            
    </div>      
  )
}

export default Mapping1