import React from 'react'
import Applied_persons from '../Appliedpersons/Appliedpersons'
export default function Applyinfo({postedown}) {
 return (
    <div className="posts">
          {postedown.map((p)=>(
            <Applied_persons final_value={p}/>
            
        ))}
    </div>
  )
}
