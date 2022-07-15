
import {useCallback, useEffect, useState}from 'react';

import editStyle from './edit.module.css'

function TodoEdit({selectedTodo,onModify}){
    const [value,setValue]=useState("");

    const onChange=useCallback((e)=>{
        setValue(e.target.value);
    },[]);

    const onSubmit=useCallback(
        (e)=>{
            
        
            onModify(selectedTodo.id,value);
            setValue('');
            //새로고침 방지
            e.preventDefault();
            
            
        },[onModify,value]
    );
    
    useEffect(()=>{
        //selectedTodo에 todo객체가 담겼을 때 실행됨 value에 text 담아주기 위함.
        if(selectedTodo){
            setValue(selectedTodo.text);
        }
    },[selectedTodo])
  

    return(
        <div >
            <form onSubmit={onSubmit} className={editStyle.button}>
                <h3>&nbsp; &nbsp;🥑Edit ToDo</h3>
                <input
                    className={editStyle.input}
                    onChange={onChange}
                    value={value}
                    placeHolder="Edit TODO"
                />
                <button className={editStyle.button} type="submit">MODIFY</button>
            </form>
            
        </div>

    );


}

export default TodoEdit;