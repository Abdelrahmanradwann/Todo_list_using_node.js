import React, {useEffect, useState} from 'react'
import {TodoItem} from '../types/TodoItem';
import Item from './Item';
import axios from 'axios';
import {IoAddOutline} from 'react-icons/io5';



export default function Todo() {

	const [todos,setTodos] = useState<TodoItem[]>([]);
	const [newDescription,setNewDescription] = useState("");
	const [show,setShow] = useState(false);

	async function addTodo(description:string){
		if(description==='')
			return
		try{
			const res = await axios.post("http://localhost:4000/add",{
				description
			});
			setTodos([...todos,res.data]);
			setNewDescription("");
			setShow(false);
		}catch(e: any)
		{
			console.log(e);
		}

	}

	useEffect(()=>{
		async function getTodos(){
			try{
				const res = await axios.get("http://localhost:4000/Todo");
				setTodos(res.data);
			}catch(e: any)
			{
				console.log(e);
			}
		}
		getTodos();
	},[])
	return (
	<div className='bg-stone-200 p-6 overflow-y-scroll rounded-md w-2/3 h-3/4 boxShadow flex flex-col items-center relative z-0'>
		<h1 className='text-3xl font-bold mb-4'>Todo List</h1>
		{todos.map((todo)=>{
			return(
				<Item key={todo._id} _id={todo._id} description={todo.description} created_at={todo.createdAt} setTodos={setTodos} todos={todos} />
			)
		})}
			<div className="absolute right-6 flex flex-row  items-center gap-3 text-stone-800 cursor-pointer bg-stone-50 rounded-full p-2" onClick={()=>setShow(!show)}>
				<span className='text-sm'>
					Add new Todo
				</span>
				<span className='rounded-full bg-blue-500'>
					<IoAddOutline size={36} color='white'/>
				</span>
			</div>

			<div className={`flex flex-col absolute items-center bg-stone-300 w-1/2 p-6 rounded-md shadow-md ${show?'block':'hidden'}`}>
				<input type="text" className='w-full rounded p-2 mt-6 mb-2' value={newDescription} placeholder='New Todo' onChange={(e)=>setNewDescription(e.target.value)} />
				<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-auto' onClick={()=>addTodo(newDescription)}>Add New Todo</button>
			</div>
	</div>
	)
}
