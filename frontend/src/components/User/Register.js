import React from 'react'
import {useNavigate} from 'react-router-dom';
const Register = () => {
  const history=useNavigate();
  const demoHandle=(e)=>{
    let g=true
e.preventDefault();
if(g){
history('/')}
  }
  return (
    <div>
      <form onSubmit={demoHandle}>
        <button>submit</button>
      </form>
    </div>
  )
}

export default Register