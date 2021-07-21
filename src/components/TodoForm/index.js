import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');

    

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
            
            <form className="todo__form" onSubmit={handleSubmit} >
                <input 
                    className="todo__input"
                    type="text" 
                    placeholder='renseigner un item' 
                    onChange={handleChange}
                    value={input} 
                    name="text"
                />
                <button className="todo__input" >Add Todo</button>
            </form>
    )
}

export default TodoForm;