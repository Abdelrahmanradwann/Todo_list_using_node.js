import React from 'react'
import Todo from './Todo'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Register from './Register'

export default function Main() {
  return (
	<div className='bg-gradient-to-t h-screen from-blue-500  to-emerald-700 flex flex-col justify-center items-center '>
		<BrowserRouter>
			<Routes>
				<Route index element={<Navigate replace to="/login"/>}/>
				<Route path='/login' element={<Register/>}/>
				<Route path='/register' element={<Register/>}/>
				<Route path='/main' element={<Todo/>}/>
			</Routes>
		</BrowserRouter>
	</div>
  )
}
