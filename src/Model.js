import React , { useEffect } from 'react';
import ReactDom from 'react-dom';
import { ModelBox } from './ModelBox';

let node = null;

export default function Model(props){
	useEffect(() => {    
		node = document.createElement("div");
		document.body.appendChild(node);
		ReactDom.render(<ModelBox {...props} />, node);
		
		
		node && ReactDom.render(<ModelBox { ...props } />, node);
		
		
		return function cleanup() {    
			ReactDom.unmountComponentAtNode(node);
			node.parentNode && node.parentNode.removeChild(node);
		};
		
	},[props]);	
	return <script />; 
}