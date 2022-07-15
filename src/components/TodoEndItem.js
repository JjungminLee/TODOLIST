import listStyle from './list.module.css';

function TodoEndItem({todo,changeRemove}){
    const {id,text,checked}=todo;
   
    return(
        
        <li className={listStyle.completeItem}>
            <button className={listStyle.button} onClick={()=>changeRemove(id,text,checked)}>
                <i class='bx bxs-check-circle' style={{color:'#3464eb'} } ></i>
            
                &nbsp;{text}
            </button>
        </li>
       

    );


}

export default TodoEndItem;