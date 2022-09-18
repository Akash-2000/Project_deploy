import React from 'react'
import AppliedPersons from '../Appliedpersons/Appliedpersons'
export default function Applyinfo({postedown}) {
 return (
    <div className="posts">
          {postedown.map((p)=>(
            <AppliedPersons final_value={p}/>
            
        ))}
    </div>
  )
}
