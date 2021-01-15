import React from 'react';
import styled from 'styled-components';

import {Avatar, Card, Tag} from 'antd';
import {whoList} from '../../../helpers/whoList';
import {CloseCircleOutlined} from '@ant-design/icons';

export const TaskCard = ({data,changeTaskStatus,deleteTask}) => {

    const Footer = styled.div`
        display:flex;
        justify-content:space-between;
        align-items:flex-end;
        span{
            font-size:13px;
        }
    `;

    const getPriorityAndSetInfoTitle = () =>{
        const CardTitle = styled.span`
            display:flex;
            align-items:center;
        `;

        const ColorBlock = styled.span`
            display: inline-block;
            height:1rem;
            width:1rem;
            background-color:${(data.priority).color};
            margin-left:1rem;
        `;
        
        return <CardTitle>Priority <ColorBlock/></CardTitle>
    }



    const getCardButtons = () =>{
        const ToDo = <Tag style={{ cursor: 'pointer' }} color="volcano" onClick={() => changeTaskStatus(data.taskId, 'To Do')}> To Do </Tag>
        const Doing = <Tag style={{ cursor: 'pointer' }} color="magenta" onClick={() => changeTaskStatus(data.taskId, 'Doing')}> Doing </Tag>
        const Done = <Tag style={{ cursor: 'pointer' }} color="green" onClick={() => changeTaskStatus(data.taskId, 'Done')}> Done </Tag>
        const Close = <CloseCircleOutlined style={{color:'red',cursor:'pointer'}} onClick={() => deleteTask(data.taskId)} />

        switch (data.status) {
            case 'To Do':
                return [Doing, Done, Close]
            default:
                return

            case 'Doing':
                return [ToDo, Done, Close]

            case 'Done':
                return [ToDo, Doing,Close]
        }
    }

    return(
        <Card size='small' title={getPriorityAndSetInfoTitle()} extra={getCardButtons()} 
        style={{
            marginBottom:'2rem',
            width:'100%',
            borderRadius:'5px',
            fontSize:'16px'
            }}>
            <div>
                {data.whatToDo}
            </div>
            <Footer>
                <span>Created at {new Date().toLocaleDateString()}</span>
                <Avatar
                    src={<img src={whoList.find(item=>item.idx === data.selectedWho).image} alt='Selected Avatar'/>}
                />
            </Footer>
        </Card>
    );
}