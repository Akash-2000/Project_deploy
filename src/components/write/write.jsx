import { useState } from "react"
import "./write.css"
import axios from "axios"
import { useContext } from "react"
import {useNavigate} from 'react-router-dom';
import {Context} from "../../context/context"
import Topbar from "../topbar/topbar"
export default function Write() {
  const [title,settitle] = useState("")
    const [desc,setdesc] = useState("")
      const [file,setfile] = useState(null)
    const {user} = useContext(Context)
    let Navigate = useNavigate()
 const handlesubmit = async(e)=>{

        e.preventDefault();
              const newpost = {
          owner:user.username,
          title,
          desc,
          orgnization:user.orgnization
        };
        if(file){
          const data =new FormData();
          const filename = Date.now() +file.name;
          data.append("name",filename)
          data.append("file",file)
           newpost.photo = filename;
          try {
           
            await axios.post("https://revildo1.herokuapp.com/api/upload",data)
           
          } catch (err) {}
          try{
          
             await axios.post("https://revildo1.herokuapp.com/api/write",newpost)
          
             Navigate("/ownerhome")
        }catch(err){

        }
      }
        }

  return (
    <div className="write">
      <Topbar/>
      
        {file &&(
          <img  className="writeimg" src={URL.createObjectURL(file)} alt="img"/>
      ) }
     
      <div>
      <center>
      <form className="w-50" on onSubmit={handlesubmit}>
        <div class="mb-3">
          <label htmlFor="fileinput">
            <span><i class="writeicon fa-solid fa-square-plus"></i><b>Click the icon to upload image</b></span>
          </label>
          <input type="file" id="fileinput" className="mb-2 mt-1"style={{ display: "none" }} onChange={e =>setfile(e.target.files[0])}/>
          <input type="text"   placeholder="job Title" className=" form-control mt-1" autoFocus={true}
          onChange={e =>settitle(e.target.value)} 
          />
        </div>
        <div className="">
          <textarea placeholder="job description.." type="text" className="form-control"
          onChange={e =>setdesc(e.target.value)} rows="2"></textarea>
        </div>
        <button className="btn btn-primary mt-5" type="submit">Publish</button>
      </form>
          </center>
    </div>

  </div>
  )
}
