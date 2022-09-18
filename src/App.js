
import './App.css';
import Check from './check';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Userlogin from './userlogin/userlogin';
import Ownereg from './owner_reg/owner_reg';
import Ownerlogin from './ownerlogin/ownerlogin';
import Userreg from './userregistrtion/user_reg';
import Ownerhome from './ownerhome/ownerhome';
import Freelancehome from './freelancer/freelancehome';
import Write from './components/write/write';
import ViewPages from './components/view_page/view_page';
import ViewApplied from './viewappliedpage/viewappliedpage';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Check/>}></Route>
      </Routes>
      <Routes>
        <Route path="/userlogin" element={<Userlogin/>}></Route>
      </Routes>
      <Routes>
        <Route path="/ownerlogin" element={<Ownerlogin/>}></Route>
      </Routes>
       <Routes>
        <Route path="/userreg" element={<Userreg/>}></Route>
      </Routes>
      <Routes>
        <Route path="/ownereg" element={<Ownereg/>}></Route>
      </Routes>
      <Routes>
        <Route path="/ownerhome" element={<Ownerhome/>}></Route>
      </Routes>
      <Routes>
        <Route path="/home" element={<Freelancehome/>}></Route>
      </Routes>
      <Routes>
        <Route path="/write" element={< Write/>}></Route>
      </Routes>
       <Routes>
        <Route path="/appliedjob" element={<ViewPages/>}></Route>
      </Routes>
      <Routes>
        <Route path="/ownerlist" element={<ViewApplied/>}></Route>
      </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
