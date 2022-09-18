
import {Link} from "react-router-dom"

export default function Topbarfree() {
      return (
        <div className="container-fluid ">
             <div className="row mt-2 mb-5">
                <div className="col-sm-6"><center><button className="btn btn-success w-25 mt-1"><Link className="link" to="/home">HOME</Link></button></center></div>
              <div className="col-sm-6"><center><button className="btn btn-success w-25 mt-1"><Link className="link col-sm-6 justify-content-center align-items-center" to="/appliedjob">VIEW APLLIED JOBS</Link></button></center></div>
        </div>
        </div>
  )

  }