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
        <a href='/'><h1>logout</h1></a>
{user &&
<>
<h1>hello {user.name}</h1>
<img src={user.resume} style={{borderRadius:"10px",width:"200px"}}/>
<p>{user.resume}</p>


</>
}
    </div>
  )
}

export default Detail