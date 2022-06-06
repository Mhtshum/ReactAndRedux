import React , { useRef } from 'react';
import { add, open, close } from './tmReducer';
import { store } from './store';
import { useStore } from './storeHooks';
import Model from './Model';

function App(){	
	const  inputRef = useRef(null);		
 	const tmState = useStore(({	 tm }) => tm);	
	
	const addTodo = (e) => {
		e.preventDefault();		
		let newTodo = inputRef.current.value;
		//dispatch({type:'add',payload:newTodo});
		store.dispatch(add(newTodo));		
		inputRef.current.value = null;
		return false;
	};	
		
	const onOpen = (item) => {					
		//dispatch({type:'open',payload: { open : true, clickedItem : item }});
		store.dispatch(open({ open : true, clickedItem : item }));		
		};	
	
	const onClose = () =>{ 	
		//dispatch({type : 'close', payload:{ open : false }});	
		store.dispatch(close({ open : false }));	
	};
	
	const todosRows = tmState.todosArray.map((t,i) => <div key={i} onClick={()=>onOpen(t)}>{t}</div>)
	
	return (
		<div>			
			<h1> by fn</h1>				
			{todosRows}						
				<input placeholder="add todo" ref={inputRef} />
				<button onClick={addTodo}>Add</button>
				<Model
					open={tmState.open}
					onClose={onClose}
					content={tmState.clickedItem}
				/>		
			
		</div>);
}

export default App;