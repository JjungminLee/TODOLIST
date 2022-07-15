import React, { useCallback } from 'react';

import {useState} from 'react';

import inputStyle from './input.module.css'


function TodoInput({setCount,setToDos,count,addTodo}) {
  //props로 setCount 가져와서 입력될때마다 counter 값 증가시켜줌
  const [toDo,setToDo]=useState("");
  const onChange=useCallback(event=>{
    
    setToDo(event.target.value);
  },[])
  const onSubmit=useCallback(
    event=>{
      
      event.preventDefault();
      if(toDo===""){
        return;
      }
      addTodo(toDo);
      setToDo("");//todo 초기회
      setCount(count+1);
      
    
    
    },[addTodo,toDo]
  )

 
  return (

    
      <div>
        
        <form onSubmit={onSubmit} className={inputStyle.background} >
                <input onChange={onChange}
                  className={inputStyle.input}
                  value={toDo}
                  type="text"
                  placeholder="Add TODO"/>
                  
                <button type="submit" className={inputStyle.button}>
          

                </button>
        </form>
      </div>

    
  );
}

export default TodoInput;