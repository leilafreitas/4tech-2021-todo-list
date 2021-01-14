import React, { useState } from 'react';
import styled from 'styled-components';
import {TaskForm} from '../../components/TaskForm/TaskForm';
import {TaskList} from '../../components/TaskList/TaskList';


export const Layout = () =>{

    const [taskList,setTaskList] = useState([]);
    const [loading,setLoading] = useState(false);

    const submitNewTask = (newTask) =>{
        const taskListCopy = [...taskList];
        taskListCopy.push(newTask);

        const reorderedTaskListCopy = taskListCopy.sort((x, y) => x.createdAt - y.createdAt)

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            setTaskList(reorderedTaskListCopy)
        }, 3000)
        console.log(taskList);

    }

    const Container = styled.div`
        width:100vw;
        height:100vh;
        display:grid;
        grid-template-columns:8em 1fr 1fr 1fr 8em;
        grid-template-rows:1rem 9em 1rem 1fr;
        background-image:linear-gradient(to bottom right, #E7F0FD, #ACEEBB);
        overflow:hidden;
    `;

    return <Container>
        <TaskForm loading={loading} submitNewTask={submitNewTask} />
        <TaskList loading={loading} taskList={taskList} setTaskList={setTaskList}/>
    </Container>
}