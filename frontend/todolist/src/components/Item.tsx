import {useState} from 'react'
import {TodoItem} from '../types/TodoItem'
import axios from 'axios';

type props = {
	_id: number,
	description: string,
	todos: TodoItem[],
	created_at: string,
	setTodos: Function
}

export default function Item({_id: id, description, created_at, todos, setTodos}: props) {
	const [editing,setEditing] = useState(false);
	const [desc,setDesc] = useState(description);
	async function updateTodo(){
		if(!editing)
			return;

		axios.put(`http://localhost:4000/update/${id}`, {
			description: desc
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	async function deleteTodo(){
		axios.delete(`http://localhost:4000/delete/${id}`)
		.then(() =>
			setTodos(todos.filter((todo)=>todo._id!==id))
		)
		.catch(function (error) {
			console.log(error);
		});
	}
	const date = new Date(created_at).toDateString()
	return (
	<div className='flex flex-row gap-4 my-2 items-center justify-between w-full bg-white bg-opacity-75 p-3 rounded-sm shadow-md'>
		{ !editing ?
			<>
				<div>
					<h4 className='text-xl font-bold' onClick={()=>setEditing(!editing)}>{desc}</h4>
					<span className='text-xs'>{date}</span>
				</div>
			</>
			:
			<input
			type='text'
			value={desc}
			onChange={ (e) => setDesc(e.target.value) }
			onBlur={()=>{updateTodo();setEditing(false)}}
			className='border-2 border-black '/>}

		<div className="flex flex-row gap-3">
			<button className='bg-green-500 shadow-md px-2 py-1 rounded text-white hover:bg-green-600 transition-all duration-75'>Mark as Done</button>
			<button className='bg-yellow-400 shadow-md px-2 py-1 rounded text-white hover:bg-yellow-600 transition-all duration-75' onClick={()=>{setEditing(!editing);updateTodo()}}> Edit</button>
			<button className='bg-red-500 shadow-md px-2 py-1 rounded text-white hover:bg-red-600 transition-all duration-75' onClick={() => deleteTodo()}> Delete</button>

		</div>
	</div>
	)
}
