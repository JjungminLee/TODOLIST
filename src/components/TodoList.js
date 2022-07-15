import React, { useCallback } from 'react';
import listStyle from './list.module.css';
import {useState} from 'react';
import TodoListItem from './TodoListItem';
import TodoEndItem from './TodoEndItem';
import TodoEdit from './TodoEdit';

function TodoList({toDos,handleRemove,endTodos,changeRemove,
    onSelectedTodo,onInsertToggle,onModify,insertToggle,selectedTodo

}){
   
   

    
    return(
        <div>
            
            <h3>&nbsp; &nbsp; 📋 TODO</h3>
            
            
            <ul className={listStyle.list}>
                
                {toDos.map((todo,index)=>(
                    <TodoListItem
                        todo={todo}
                        key={index}
                        handleRemove={handleRemove}
                        selectedTodo={selectedTodo}
                        onSelectedTodo={onSelectedTodo}
                        onInsertToggle={onInsertToggle}
                        onModify={onModify}
                        insertToggle={insertToggle}
                        toDos={toDos}
                      
                    />
                ))}
            </ul>
            <h3>&nbsp; &nbsp;🎉 COMPLETETE </h3>
            <ul className={listStyle.list}>
                {endTodos.map((todo)=>(
                    <TodoEndItem
                        todo={todo}
                        key={todo.id}
                        changeRemove={changeRemove}
                    />
                    

                ))}
                
            </ul>




        </div>

    );

}

export default TodoList;