
import tempStyle from './template.module.css'
import TodoDate from './TodoDate';
import TodoInput from './TodoInput';
import {useCallback, useState,useRef, useEffect} from 'react';
import TodoList from './TodoList';
import TodoEdit from './TodoEdit';
import editStyle from './edit.module.css'

function TodoTemplate({ children }) {
    

    
    const [toDo,setToDo]=useState("");
    const [toDos,setToDos]=useState([]);
    const[count,setCount]=useState(toDos.length);
    //local storage 연결
    

    //고유 id주기
    const nextId=useRef(0);

    const addTodo=useCallback(
        (text)=>{
            const newItem={
                id:nextId.current,
                text:text,
                checked:false
            };
            setToDos(current=>[...current,newItem]); //스프레드
            //setToDos(toDos.concat(newItem)); //concat둘다 가능
            
            nextId.current+=1;
            
        },[toDos]
    )
    
    const[endTodos,setEndTodos]=useState([]);

    const handleRemove=useCallback(

        
        (id,text,checked)=>{
           
            
          const endItem={
            id:id,
            text:text,
            checked:checked

          };
            
            
            setToDos(toDos.filter((todo)=>todo.id!==id)); //삭제한 애를 제외한 애들로만 구성된 배열로 재구성
            setCount(count-1);
            setEndTodos(current=>[...current,endItem]);
            
        },[toDos]
        
        
    );

    const changeRemove=useCallback(
        
        (id,text,checked)=>{
            const changeItem={
                id:id,
                text:text,
                checked:checked

            };
            
            setToDos(current=>[...current,changeItem]);
            setCount(count+1);
            setEndTodos(endTodos.filter((todo)=>todo.id!==id));
        },[endTodos]

    );
        
    //수정할 항목의 객체 가져옴
    let [selectedTodo,setSelectedTodo]=useState([]);

    const onSelectedTodo=useCallback(
        (id,text,checked)=>{
            const selectItem={
                id:id,
                text:text,
                checked:!checked
            }
            
            
        
            setSelectedTodo(selectItem);
            
            onInsertToggle();
        }
        
    )

    //insertToggle 값이 true이면 팝업창 부르기
    const[insertToggle,setInsertToggle]=useState(false);

    const onInsertToggle=()=>{
        console.log("onInsertToggle실행");
        console.log("selectedTodo");
        console.log(selectedTodo);
        setInsertToggle((prev)=>!prev);
    };


  

    
    
    //수정하기
    const onModify=(id,modifyText)=>{

        onInsertToggle();//팝업창 끄기
        console.log("onModify 실행");
        console.log(id,modifyText);
        setToDos(
            toDos.map((todo)=>
            todo.id===id? {...todo,text:modifyText,checked:false}:todo)
        );
    }
   

    //local storage 연결

    const isMount = useRef(true);

    useEffect(() => {
        if (!isMount.current) {
        localStorage.setItem('toDos', JSON.stringify(toDos));
        localStorage.setItem('endToDos',JSON.stringify(endTodos));
        
        }
    }, [endTodos,toDos]);

    useEffect(() => {
        const localTodoList = localStorage.getItem('toDos');
        if (localTodoList) {
        setToDos(JSON.parse(localTodoList));
        }

        const endTodolist=localStorage.getItem('endToDos');
        if(endTodolist){
            setEndTodos(JSON.parse(endTodolist));
        }

       
        isMount.current = false;
    }, []);


    return <div className={tempStyle.templateBlock}>
        
        <TodoDate taskCnt={count}></TodoDate>
        {insertToggle &&<TodoEdit onModify={onModify} selectedTodo={selectedTodo}></TodoEdit>}
        {!insertToggle && <TodoInput setCount={setCount} 
        setToDos={setToDos} 
        toDos={toDos}
        count={count}
        addTodo={addTodo}
        ></TodoInput>}
        <TodoList 
        toDos={toDos} 
        handleRemove={handleRemove}
        changeRemove={changeRemove}
       
        endTodos={endTodos}
        selectedTodo={selectedTodo}
        onModify={onModify}
        onInsertToggle={onInsertToggle}
        onSelectedTodo={onSelectedTodo}
        insertToggle={insertToggle}
       
        ></TodoList>
        
        
        
    </div>;
  }
  
  export default TodoTemplate;