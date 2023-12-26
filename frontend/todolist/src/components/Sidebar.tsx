import React from 'react'
import { LuListTodo } from "react-icons/lu";
import { IoAddOutline } from "react-icons/io5";


export default function Sidebar() {
  return (
	<nav className=' flex flex-col items-center bg-violet-800 h-screen w-1/6 text-white p-6 relative'>
		<h1 className='font-bold text-3xl absolute'>Todo List</h1>

		<div className='text-holder mb-auto mt-auto w-full '>
			<div className='flex flex-row gap-4 items-center justify-start w-full py-1 px-2  '>
				<LuListTodo/>
				<h4>My List</h4>
			</div>
			<div className='flex flex-row gap-4 items-center justify-start w-full py-1 px-2 '>
				<IoAddOutline />
				<h4>Add Todo</h4>
			</div><div className='flex flex-row gap-4 items-center justify-start w-full py-1 px-2 '>
				<LuListTodo/>
				<h4>Add Todo</h4>
			</div><div className='flex flex-row gap-4 items-center justify-start w-full py-1 px-2 '>
				<LuListTodo/>
				<h4>Add Todo</h4>
			</div>
		</div>

	</nav>
  )
}
