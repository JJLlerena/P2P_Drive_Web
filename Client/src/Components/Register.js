import Axios from 'axios';
import { useState } from 'react';



function Register()  {
  const url='/userRegisters';
  
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    number: "",
    password: ""
  })
    

   function submit(e){
    e.preventDefault();
    Axios.post(url,null, { params: {
      firstname: data.firstname,
      lastname: data.lastname,
      username: data.username,
      email: data.email,
      number: data.number,
      password: data.password
    }})
      .then(res=>{
        console.log(res.data);
      })
  }

  function handle(e){
    const newdata={ ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    
    console.log(newdata)
    console.log(data)

  }
    return(
        <div >
          <form onSubmit={(e)=> submit(e)} class=" bg-slate-200 rounded-md border-4 mt-10 p-4 h-fit w-fit mx-auto" >
                <div className="grid grid-cols-1 pb-2 px-10">
                  <label for="FirstName">FirstName: </label>
                  <input onChange={(e)=>handle(e)} value={data.firstname} type="text"  id="firstname"  placeholder="FirstName"/>
                </div>
                <div className="grid grid-cols-1 pb-2 px-10">
                  <label for="LastName">LastName: </label>
                  <input onChange={(e)=>handle(e)} value={data.lastname} type="text"  id="lastname" placeholder="LastName"/>
                </div>
                <div className="grid grid-cols-1 pb-2 px-10">
                  <label for="UserName">Username: </label>
                  <input onChange={(e)=>handle(e)} value={data.username} type="text" id="username" placeholder="Username"/>
                </div>
                <div className="grid grid-cols-1 pb-2 px-10">
                  <label for="Email">Email: </label>
                  <input onChange={(e)=>handle(e)} value={data.email} type="email"  id="email" placeholder="Email"/>
                </div>
                <div className="grid grid-cols-1 pb-2 px-10">
                  <label for="Phone_Number">PhoneNumber: </label>
                  <input onChange={(e)=>handle(e)} value={data.number} type="number"  id="number" placeholder="3057778888" 
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                </div>
                <div className="grid grid-cols-1 pb-2 px-10">
                  <label for="Password">Password: </label>
                  <input onChange={(e)=>handle(e)} value={data.password} type="password"  id="password" placeholder="password"/>
                </div>
              <div className="footer w-fit mx-auto">
                <button type='Submit' class='bg-[#003366] rounded-lg  py-2 px-12 '>
                <span class=' text-lg text-yellow-400'>Submit</span>
                </button>
              </div>
          </form>
          
      </div>      
    );
}

export default Register;