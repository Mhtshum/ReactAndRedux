import { createSlice } from '@reduxjs/toolkit';


const initialState = { todosArray :['bas','foo','tst'], open : false };

const slice = createSlice({	
    name:'tm',
	initialState : initialState,
	reducers : {
		add: (state,action) => {
			return {...state, todosArray: [...state.todosArray, action.payload] };
		},
		open: (state, action) =>{
			return {...state, ...action.payload};	
		},
		close: (state, action) =>{
			return {...state, ...action.payload};	
		}		
	},
});

export const {add , open , close} = slice.actions;

export const sState = state => state.tms;

export default slice.reducer;
