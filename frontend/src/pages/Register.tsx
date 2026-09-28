import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import "./auth.css";


export default function Register(){

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  async function handleRegister(){

    try {

      await register(
        name,
        email,
        password,
      );

      alert("Registrasi berhasil");

      navigate("/login");


    } catch(error:any){

      alert(error.message);

    }

  }


  return (

    <div className="auth-container">

      <div className="auth-card">


        <h1 className="auth-title">
          Daftar Akun
        </h1>


        <p className="auth-subtitle">
          Beasiswa Pelatihan
        </p>


        <input
          className="auth-input"
          placeholder="Nama Lengkap"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />


        <input
          className="auth-input"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />


        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />


        <button
          className="auth-button"
          onClick={handleRegister}
        >
          Daftar
        </button>


        <div
          className="auth-link"
          onClick={()=>navigate("/login")}
        >
          Sudah punya akun? Login
        </div>


      </div>

    </div>

  )

}