import React from 'react'
import axios from 'axios';
import{useEffect,useState} from 'react'
axios.defaults.withCredentials=true
const Detail = () => {

    const [user, setUser] = useState()
    const sendRequest=async()=>{
        const res=await  axios.get("http://localhost:5000/user/veri",{
            withCredentials:true
        }).catch(err=>console.log(err))
        const data = await res.data
        return data
    }
useEffect(() => {
  sendRequest().then((data)=>setUser(data.user))

  
}, [])


  return (
    <div>
       
{user &&
<>

<div>
  <h1 style={{textAlign:"center"}}>Welcome {user.name} !</h1>
</div>
<ul>
  <li>
  <button class="btn">PersonalData</button>
  </li>
  <li>
    <button class="btn">Educationdata</button>
  </li>
  <li>
    <button className='btn'>EmployementData</button>
  </li>
</ul>

<div>
  <ul></ul>
</div>


</>
}
    </div>
  )
}

export default Detail