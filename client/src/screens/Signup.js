import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [credentials,setCredentials] = useState({name:"",
email:"",
password:"",
location:""})

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location})
        })
        const json = await response.json();
        console.log(json);

        if(!json.success){
            alert("Enter valid credentials")
        }
    }

    const changecred = (event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
    

  return (
    <>
    <div className='container'>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="name" className="form-label">Username</label>
    <input type="text" className="form-control"  name="name" value={credentials.name} onChange={changecred} />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={changecred} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control"  name="password" value={credentials.password} id="exampleInputPassword1" onChange={changecred} />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control"  name="location" value={credentials.location} id="exampleInputPassword1" onChange={changecred} />
  </div>
 
  <button type="submit" className="m-3 btn btn-primary btn-success">Submit</button>
  <Link to="/login" className="m-3 btn-danger btn">Already an User?</Link>
</form>
    </div>
    </>
  )
}
