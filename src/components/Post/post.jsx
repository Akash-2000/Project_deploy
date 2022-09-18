
import { useContext } from "react"
import {Context} from "../../context/context"
import axios from 'axios'
//{PF+post1.post1.photo}
export default function Post(post1) {
  const {user} = useContext(Context)
  
  const handleButton = async(e)=>{
     const newpost = {
          name:user.username,
          qualifcation:user.qualifcation,
          applied_for:post1.post1.title,
          owner:post1.post1.owner
        };
     const jobinfo = { 
        owner:post1.post1.owner,
        job_title:post1.post1.title,
        freelancer:user.username

}  
       try{
        await axios.post("https://revildo1.herokuapp.com/api/write/add",newpost)
        alert("sucesfully applied!")
      }catch(err){
        console.log(err)
      }
          try{
        await axios.post("https://revildo1.herokuapp.com/api/write/jobinfo",jobinfo)
        alert("sucesfully applied!")
      }catch(err){
        console.log(err)
      }
   }
     const  PF = "https://revildo1.herokuapp.com/images/"
     const Dates = new Date(post1.post1.createdAt).toDateString()
  return (
    <div className="allign-items-center mt-5">
      <center>
            <div class="card w-50">
              {post1.post1.photo && (
        
        <img className='card-img-top img-fluid w-100' src={PF+post1.post1.photo} alt=""/> )}
 
  <div class="card-body">
    <h5 class="card-title">{post1.post1.title}</h5>
    <p class="card-text"> {post1.post1.desc}</p>
    <p class="card-text">{Dates}</p>
    {user.qualifcation && (<button onClick={handleButton} className="btn btn-primary">Apply</button>)}
  </div>
</div>
</center>
</div>


  )
}
