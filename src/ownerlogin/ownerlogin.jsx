import React from "react"
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useContext } from "react";
import axios from "axios";
import { Context } from "../context/context";
export default function Ownerlogin() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isfetching } = useContext(Context);
  const handlesubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://revildo1.herokuapp.com/api/ownerauth/login", {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCESS", payload: res.data });
      res.data && window.location.replace("/ownerhome");
    } catch (error) {
      console.log(error)
      dispatch({ type: "LOGIN_fAILURE" });
    }
  };

  return (
    <div className="login container-fluid d-flex align-items-center justify-content-center mt-5 bg w-50">
      <form className="loginform mt-5" onSubmit={handlesubmit}>
        <h1 className="text-center">Owner Login</h1>
        <div className='mb-3 w-100'>
        <label className='form-label'>Email</label>
        <input
          type="email"
          className="logininput form-control"
          placeholder="enter email..."
          ref={userRef}
        />
        </div>
        <div className='mb-3'>
        <label className='form-label'>password</label>
        <input
          type="password"
          className="logininput form-control"
          placeholder="enter password"
         ref={passwordRef}
        />
        </div>
        <button type="submit" className="loginbutton btn btn-primary"disabled={isfetching} >
          Login
        </button>
<p className='mt-2'>
        <Link className="link" to="/ownereg">
            Don't have an account Register?
          </Link></p>
      </form>
    </div>

  )
}

