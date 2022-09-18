import React from 'react'
import Applied from '../applied_list/applied'

export default function Counts({posted}) {
 return (
    <div className="posts">
          {posted.map((p)=>(
            <Applied finaluser={p}/>
            
        ))}
    </div>
  )
}
