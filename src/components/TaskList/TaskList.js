import React from 'react';
import {Spin} from 'antd';
import styled from 'styled-components'
import { TaskCard } from './TaskCard/TaskCard';

export const TaskList = ({loading,taskList,setTaskList}) =>{
    
    const TaskListLayout = styled.div`
        padding-right:0.5rem;
        padding-left:0.5rem;
        grid-column:2/5;
        grid-row:4;
        overflow:auto;
        ::-webkit-scrollbar {
            width: 6px;
            background: #ACEEBB;
            
        }  
        ::-webkit-scrollbar-thumb{
            background-color:#fff;
            border-radius:1px;
        } 
        .SpinArea{
            
        }
    `;

    const ColumnHeaderArea = styled.div`
        display:flex;
        justify-content:space-between;
        margin-top:2rem;
    `;

    const ColumnHeader = styled.div`
        display:flex;
        justify-content:center;
        flex-grow:1;
        font-size:30px;
    `;

    const Divider = styled.div`
        border: 0.1rem solid #6d6a6a;
        background-color:#6d6a6a;
        margin-bottom:2rem;
    `;

    const changeTaskStatus = (taskId,moveTo)=>{
        const taskListCopy = [...taskList];
        const taskToBeMoved = taskListCopy.find(item=>item.taskId === taskId);
        taskToBeMoved.status = moveTo;
        setTaskList(taskListCopy);

    }

    const generateTaskColumns = () =>{
        const Column = styled.div`
            padding:0 1%;
            width: calc(100% /3);
            display:flex;
            justify-content:flex-start;
            flex-direction:column;
            align-items:center;
        `;
        
        const Row = styled.div`
            display:flex;
        `;
        
        return (
            <Row>
                <Column>
                    {
                    taskList
                        .filter(item => item.status === 'To Do')
                        .map((item,key)=>{
                            return <TaskCard 
                            key={`To Do-${key}`}
                            data={item}
                            changeTaskStatus={changeTaskStatus}
                            />
                        })
                    }
                </Column>
                <Column>
                    {
                    taskList
                        .filter(item => item.status === 'Doing')
                        .map((item,key)=>{
                            return <TaskCard 
                            key={`Doing-${key}`}
                            data={item}
                            changeTaskStatus={changeTaskStatus}
                            />
                        })
                    }
                </Column>
                <Column>
                    {
                    taskList
                        .filter(item => item.status === 'Done')
                        .map((item,key)=>{
                            return <TaskCard 
                            key={`Done-${key}`}
                            data={item}
                            changeTaskStatus={changeTaskStatus}
                            />
                        })
                    }
                </Column>
            </Row>
        );
    }

    return (
        <TaskListLayout>
            <ColumnHeaderArea>
                <ColumnHeader>To Do</ColumnHeader>
                <ColumnHeader>Doing</ColumnHeader>
                <ColumnHeader>Done</ColumnHeader>
            </ColumnHeaderArea>
            <Divider/>
            <Spin spinning={loading} wrapperClassName='SpinArea'>
                {generateTaskColumns()}
            </Spin>
        </TaskListLayout>
    )
}