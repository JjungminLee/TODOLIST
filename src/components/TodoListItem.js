
import listStyle from './list.module.css';
import TodoEdit from './TodoEdit';
import editStyle from './edit.module.css';

function TodoListItem({todo,handleRemove,onModify,onSelectedTodo,onInsertToggle,selectedTodo,

insertToggle,toDos}){
    const {id,text,checked}=todo;
    
    
    //onClick에 콜백달아줘야함. 동시에 실행되지 않게해야하는데 매개변수도 팔요하니까!
 
    return(
        <li className={listStyle.item}>
          
                
                <button onClick={()=>handleRemove(id,text,checked)} className={listStyle.button}>
                

                <i className='bx bx-chevron-down-circle'style={{color:'#3464eb'} } ></i>
                </button>
                &nbsp;{text}
                <button className={listStyle.button} onClick={()=>onSelectedTodo(id,text,!checked)
                
                
                }>
                    <i class='bx bx-edit-alt'></i>

                </button>
                
                
                
                
                
                
            

        </li>

    );

}

export default TodoListItem;