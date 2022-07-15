import React from 'react';
import dateStyle from './date.module.css';


function TodoDate({taskCnt}){
    let now=new Date();
    let dayArr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day=dayArr[now.getDay()];
    let date=now.getDate();
    let month=now.getMonth()+1;

    return(
        
            <div className={dateStyle.background}>
                <h1 className={dateStyle.title}>{day}, {month}.{date}</h1>
                <div className={dateStyle.taskLeft}> {taskCnt} task </div>
            </div>
            
      
        

    );
}

export default TodoDate;