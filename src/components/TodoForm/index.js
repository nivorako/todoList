import React, {useState, useEffect, useRef} from 'react';

import './TodoForm.css';

function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = (e) => {
       setInput(e.target.value); 
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        props.onSubmit({
          id:Math.floor(Math.random() * 10000),
          text: input  
        });
        setInput('');
    };

    return(
            
            <form className="todoForm" onSubmit={handleSubmit} >
                <input 
                    className="todoForm-input"
                    type="text" 
                    placeholder='renseigner un item' 
                    onChange={handleChange}
                    value={input} 
                    name="text"
                    ref={inputRef}
                />
                <button className="todoForm-input" >Add Todo</button>
            </form>
    )
}

export default TodoForm;