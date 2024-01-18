import axios from 'axios';
import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';

export default function Register() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error,setError] = useState('');
	const navigate = useNavigate();
	const url = window.location.href;
	const login = url.includes('login');

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
		e.preventDefault();
		const values = {
			email,
			password
		}
		axios.post(`http://localhost:4000/${url.includes('login')?'login':'signup'}` , values)
		.then(data=>{
		  if(data.status === 200){
			navigate('/main');
			localStorage.setItem("token", data.data.user.token);
		  }
		})
		.catch((e)=>{
			if(login)
		  		setError('Error logging in');
			else
				setError("Error Signing Up");
		  console.log(e);
		})
	}

  return (
	
	<form onSubmit={(e)=>handleSubmit(e)} className='bg-stone-200 p-6 overflow-y-scroll rounded-md w-2/3 h-3/4 boxShadow flex flex-col justify-center items-center relative z-0'>
		<h1 className='text-3xl text-center mb-6 font-bold'>{login ? 'LOG IN': "SIGN UP"} NOW</h1>
		<div className="mb-3">
			<label htmlFor="email" className="form-label">Email</label><br/>
			<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required id="email" />
		</div>
		<div className="mb-3">
			<label htmlFor="password" className="form-label">Password</label><br/>
			<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required id="password" />
		</div>
		<button type="submit" className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded">Submit</button>
		{error && <p className='text-red-500 mt-3'>{error}</p>}
		<Link to={login ? '/register' : '/login'} className="text-violet-500 hover:text-violet-700  mt-2 font-bold py-2 px-4 rounded"> {login ? "SIGN UP" : "LOG IN"} </Link>
	</form>
  )
}
