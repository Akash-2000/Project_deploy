import React from 'react'
import Post from '../Post/post'
export default function Posts({post}){
  return (
    <div className="posts">
        {post.map((p)=>(
            <Post post1={p}/>
            
        ))}
    </div>
  )
}
